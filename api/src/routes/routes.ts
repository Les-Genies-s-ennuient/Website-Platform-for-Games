import { Express } from 'express'
import { db } from '../controllers/db'

export function routes(app: Express): void {

    // db Routes
    app.route('/games')
        .get(db.getGames)

    app.route('/players')
        .get(db.getPlayers)

    app.route('/game')
        .post(db.createGame)

    app.route('/player')
        .post(db.createPlayer)
}
