const Pool = require('pg').Pool
const pool_postgres = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'admin',
    port: 5439,
})

const createAPIifNotExists = () => {
    const query = `
    SELECT
        COUNT(*) AS nb_dbs
    FROM
        pg_database
    WHERE datname = 'api';`
    pool_postgres.query(query, (error, results) => {
        if (error) {
            throw error
        }
        console.log.print('test display')
        
        console.log('test display' + results.rows[0])
        if (results.rows[0].nb_dbs === 0) {
            var query = 'CREATE DATABASE api;'
            pool_postgres.query(query, (error, results) => {
                if (error) {
                    throw error
                }
            })
        }
    })
}

const init_db = () => {
    createAPIifNotExists()

    const pool_api = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'api',
        password: 'admin',
        port: 5439,
    })

    var query = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
    pool_api.query(query, (error, results) => {
        if (error) {
            throw error
        }
        query = `CREATE TYPE game_types AS ENUM ('free', 'tarot', 'poker');`
        pool_api.query(query, (error, results) => {
            if (error) {
                throw error
            }
            query = `CREATE TABLE games (
                id          SERIAL      PRIMARY KEY,
                game_type   game_types  NOT NULL,
                start_time  TIMESTAMP   DEFAULT NOW(),
                end_time    TIMESTAMP
            );`
            pool_api.query(query, (error, results) => {
                if (error) {
                    throw error
                }
                query = `CREATE TABLE players (
                    id            SERIAL        PRIMARY KEY,
                    game_id       SERIAL        REFERENCES games(id),
                    player_name   VARCHAR(30)   NOT NULL,
                    player_token  UUID          UNIQUE  DEFAULT uuid_generate_v4(),
                    creation_time TIMESTAMP             DEFAULT NOW(),
                    UNIQUE(player_name, id)
                );`
                pool_api.query(query, (error, results) => {
                    if (error) {
                        throw error
                    }
                })
            })
        })
    })
}

module.exports = {
    init_db
}
