import { postgresDB } from '../db/ApiDB'

export enum GameTypes {
    FREE = 'free',
    TAROT = 'tarot',
    POKER = 'poker'
}

export interface Game {
    name: string,
    game_type: GameTypes,
    start_time: string,
    end_time: string,
}

export type Games = Game[]

export class GamesModel {
    readonly tableName = 'games'

    public async getAll(): Promise<Games> {
        const games = await postgresDB.get(this.tableName)
        return games
    }

    public async get(id: number): Promise<Game> {
        const game = await postgresDB.getId(this.tableName, id)
        return game
    }

    public async createNewGame(game_type: GameTypes): Promise<number> {
        await postgresDB.query(`
        INSERT INTO games (game_type)
            VALUES ('${game_type}')`)
        return 
    }
}

export const games = new GamesModel()
