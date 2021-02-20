import { Pool } from 'pg'
import log from 'loglevel'
log.setLevel('info')

const username = 'postgres'
const password = 'admin'
const host = 'website-platform-for-games_db_1'
const port = 5432

async function createAPIifNotExists(): Promise<boolean> {
    const pool_postgres = new Pool({
        user: username,
        host: host,
        database: 'postgres',
        password: password,
        port: port,
    })
    const query = `
    SELECT
        COUNT(*) AS nb_dbs
    FROM
        pg_database
    WHERE datname = 'api'`
    const results = await pool_postgres.query(query)
    const nb_api_dbs = parseInt(results.rows[0].nb_dbs)
    if (nb_api_dbs === 0) {
        log.info("Creating api's database")
        const query = 'CREATE DATABASE api'
        await pool_postgres.query(query)
        log.info("API db created")
        pool_postgres.end()
        return false
    }
    else {
        pool_postgres.end()
        return true
    }
}

export async function init_db(): Promise<void> {
    const alreadyExists = await createAPIifNotExists()
    if (alreadyExists) {
        return
    }
    const pool_api = new Pool({
        user: username,
        host: host,
        database: 'api',
        password: password,
        port: port,
    })

    log.info("Install uuid-ossp extension")
    let query = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    await pool_api.query(query)
    log.info("Create game_types type")
    query = `CREATE TYPE game_types AS ENUM ('free', 'tarot', 'poker')`
    await pool_api.query(query)
    log.info("Create games table")
    query = `CREATE TABLE games (
        id          SERIAL      PRIMARY KEY,
        game_type   game_types  NOT NULL,
        start_time  TIMESTAMP   DEFAULT NOW(),
        end_time    TIMESTAMP
    )`
    await pool_api.query(query)
    log.info("Create players table")
    query = `CREATE TABLE players (
        id            SERIAL        PRIMARY KEY,
        game_id       SERIAL        REFERENCES games(id),
        player_name   VARCHAR(30)   NOT NULL,
        player_token  UUID          UNIQUE  DEFAULT uuid_generate_v4(),
        creation_time TIMESTAMP             DEFAULT NOW(),
        UNIQUE(player_name, id)
    )`
    await pool_api.query(query)
    log.info("API db initialised")
    pool_api.end()
}
