import { Pool } from 'pg'
import log, { LogLevelDesc } from 'loglevel'
import config from 'config'
log.setLevel(config.get<LogLevelDesc>('LOG_LEVEL'))

class ApiDB {
    private connectionPool: Pool

    constructor() {
        this.connectionPool = new Pool({
            user: config.get<string>('POSTGRES_USER'),
            host: config.get<string>('POSTGRES_HOST'),
            database: config.get<string>('POSTGRES_DB'),
            password: config.get<string>('POSTGRES_PASSWORD'),
            port: config.get<number>('POSTGRES_PORT')
        })
        this.init_db()
    }

    private async createAPIifNotExists(): Promise<boolean> {
        const query = `
        SELECT
            COUNT(*) AS nb_dbs
        FROM
            pg_database
        WHERE datname = 'api'`
        const results = await this.connectionPool.query(query)
        const nb_api_dbs = parseInt(results.rows[0].nb_dbs)
        if (nb_api_dbs === 0) {
            log.info("Creating api's database")
            const query = 'CREATE DATABASE api'
            await this.connectionPool.query(query)
            log.info("API db created")
            return false
        }
        return true
    }

    private async init_db(): Promise<void> {
        const alreadyExists = await this.createAPIifNotExists()
        if (alreadyExists) {
            return
        }

        log.info("Install uuid-ossp extension")
        let query = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        await this.connectionPool.query(query)
        log.info("Create game_types type")
        query = `CREATE TYPE game_types AS ENUM ('free', 'tarot', 'poker')`
        await this.connectionPool.query(query)
        log.info("Create games table")
        query = `CREATE TABLE games (
            id          SERIAL      PRIMARY KEY,
            game_type   game_types  NOT NULL,
            start_time  TIMESTAMP   DEFAULT NOW(),
            end_time    TIMESTAMP
        )`
        await this.connectionPool.query(query)
        log.info("Create players table")
        query = `CREATE TABLE players (
            id            SERIAL        PRIMARY KEY,
            game_id       SERIAL        REFERENCES games(id),
            player_name   VARCHAR(30)   NOT NULL,
            player_token  UUID          UNIQUE  DEFAULT uuid_generate_v4(),
            creation_time TIMESTAMP             DEFAULT NOW(),
            UNIQUE(player_name, id)
        )`
        await this.connectionPool.query(query)
        log.info("API db initialised")
    }

    public async query(query: string) {
        await this.connectionPool.query(query)
    }

    public async select(query: string) {
        const result = await this.connectionPool.query(query)
        return result.rows
    }

    public async get(tableName: string) {
        const queryResults = await this.connectionPool.query(`SELECT * FROM ${tableName}`)
        return queryResults.rows
    }

    public async getId(tableName: string, id: number) {
        const queryResults = await this.connectionPool.query(`SELECT * FROM ${tableName} WHERE id = ${id}`)
        return queryResults.rows[0]
    }

    public async deleteId(tableName: string, id: number) {
        await this.connectionPool.query(`DELETE FROM ${tableName} WHERE id = ${id}`)
    }
}

export const postgresDB = new ApiDB()
