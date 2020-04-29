const Pool = require('pg').Pool
const log = require('loglevel')
log.setLevel('info')

const username = 'postgres'
const password = 'admin'
const host = 'localhost'
const port = 5439

const createAPIifNotExists = (done) => {
    const pool_postgres = new Pool({
        user: username,
        host: host,
        database: 'postgres',
        password: password,
        port: port,
    })
    
    log.info('test if api db exists')
    var query = `
    SELECT
        COUNT(*) AS nb_dbs
    FROM
        pg_database
    WHERE datname = 'api'`
    pool_postgres.query(query, (error, results) => {
        if (error) {
            log.error(error)
            throw error
        }
        nb_api_dbs = parseInt(results.rows[0].nb_dbs)
        log.info('Nb dbs named api: ' + nb_api_dbs)
        if (nb_api_dbs === 0) {
            log.info("Creating api's database")
            query = 'CREATE DATABASE api'
            pool_postgres.query(query, (error, results) => {
                if (error) {
                    log.error(error)
                    throw error
                }
                log.info("API db created")
                pool_postgres.end()
                done()
            })
        }
        else { 
            log.info("API db already exists")
            pool_postgres.end()
        }
    })
}

const init_db = () => {
    createAPIifNotExists(() => {

        const pool_api = new Pool({
            user: username,
            host: host,
            database: 'api',
            password: password,
            port: port,
        })

        log.info("Install uuid-ossp extension")
        var query = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        pool_api.query(query, (error, results) => {
            if (error) {
                log.error(error)
                throw error
            }
            log.info("Create game_types type")
            query = `CREATE TYPE game_types AS ENUM ('free', 'tarot', 'poker')`
            pool_api.query(query, (error, results) => {
                if (error) {
                    throw error
                }
                log.info("Create games table")
                query = `CREATE TABLE games (
                    id          SERIAL      PRIMARY KEY,
                    game_type   game_types  NOT NULL,
                    start_time  TIMESTAMP   DEFAULT NOW(),
                    end_time    TIMESTAMP
                )`
                pool_api.query(query, (error, results) => {
                    if (error) {
                        throw error
                    }
                    log.info("Create players table")
                    query = `CREATE TABLE players (
                        id            SERIAL        PRIMARY KEY,
                        game_id       SERIAL        REFERENCES games(id),
                        player_name   VARCHAR(30)   NOT NULL,
                        player_token  UUID          UNIQUE  DEFAULT uuid_generate_v4(),
                        creation_time TIMESTAMP             DEFAULT NOW(),
                        UNIQUE(player_name, id)
                    )`
                    pool_api.query(query, (error, results) => {
                        if (error) {
                            throw error
                        }
                        log.info("API db initialised")
                        pool_api.end()
                    })
                })
            })
        })
    })
    return
}

module.exports = {
    init_db
}
