import { postgresDB } from '../db/ApiDB'
import { v4 as uuid } from 'uuid'

export interface Player {
    game_id: number,
    player_name: string,
    player_token: string,
    creation_time: string
}

export interface CreatePlayerRequest {
    name: string,
    gameId: number
}

export type Players = Player[]

export class PlayersModel {
    readonly tableName = 'players'

    public async getAll(): Promise<Players> {
        const games = await postgresDB.get(this.tableName)
        return games
    }

    public async get(id: number): Promise<Player> {
        const game = await postgresDB.getId(this.tableName, id)
        return game
    }

    public async getInGame(gameId: number): Promise<Players> {
        const players = await postgresDB.select(`
        SELECT id,
            player_name
        FROM players
        WHERE game_id = ${gameId}
        ORDER BY id ASC`)
        return players
    }

    public async createNewPlayer(playerName: string, gameId: number): Promise<string> {
        const playerToken = uuid()
        await postgresDB.query(`
        INSERT INTO players
                (game_id, player_name, player_token)
        VALUES  (${gameId}, '${playerName}', '${playerToken}')`)
        return playerToken
    }
}

export const players = new PlayersModel()
