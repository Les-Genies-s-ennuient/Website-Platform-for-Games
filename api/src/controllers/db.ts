import { v4 as uuidv4 } from 'uuid'
import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    host: 'website-platform-for-games_db_1',
    database: 'api',
    password: 'admin',
    port: 5432,
})

export class dbController {

    public getGames (request: any, response: any): void {
        const query = 'SELECT * FROM games ORDER BY id ASC'
        pool.query(query, (error: Error, results: any) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    public getPlayers (request: any, response: any): void {
        if (!request.body.game_id) {
            response.status(404).json('no game_id specified')
            return
        }
        const game_id = request.body.game_id
        const query = `
        SELECT id,
            player_name
        FROM players
        WHERE game_id = ${game_id}
        ORDER BY id ASC`
        pool.query(query, (error: Error, results: any) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    public createGame (request: any, response: any): void {
        if (!request.body.game_type) {
            response.status(404).json('no game_type specified')
            return
        }
        const game_type = request.body.game_type
        const query = `
        INSERT INTO games
                (game_type)
        VALUES  ('${game_type}')`
        pool.query(query, (error: Error, results: any) => {
            if (error) {
                throw error
            }
            response.status(201).send(results.insertId)
        })
    }

    public createPlayer (request: any, response: any): void {
        if (!request.body.game_id || !request.body.name) {
            response.status(404).json('no game_id or player name specified')
            return
        }
        const name = request.body.name
        const game_id = request.body.game_id
        const player_token = uuidv4()
        const query = `
        INSERT INTO players
                (game_id, player_name, player_token)
        VALUES  (${game_id}, '${name}', '${player_token}')`
        pool.query(query, (error: Error, results: any) => {
            if (error) {
                throw error
            }
            response.status(201).send(player_token)
        })
    }
}

export const db = new dbController()
