const uuidv4 = require('uuid').v4
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'website-platform-for-games_db_1',
    database: 'api',
    password: 'admin',
    port: 5432,
})

const getGames = (request, response) => {
    const query = 'SELECT * FROM games ORDER BY id ASC'
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPlayers = (request, response) => {
    const game_id = request.body.game_id
    const query = `
    SELECT id,
           player_name
    FROM players
    WHERE game_id = ${game_id}
    ORDER BY id ASC`
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createGame = (request, response) => {
    const game_type = request.body.game_type
    const query = `
    INSERT INTO games
            (game_type)
    VALUES  ('${game_type}')`
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(results.insertId)
    })
}

const createPlayer = (request, response) => {
    const name = request.body.name
    const game_id = request.body.game_id
    const player_token = uuidv4()
    const query = `
    INSERT INTO players
            (game_id, player_name, player_token)
    VALUES  (${game_id}, '${name}', '${player_token}')`
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(player_token)
    })
}

module.exports = {
    getGames,
    getPlayers,
    createGame,
    createPlayer,
}
