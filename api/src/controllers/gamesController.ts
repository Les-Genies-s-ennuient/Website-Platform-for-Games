import {
    Controller,
    Get,
    Path,
    Post,
    Route,
  } from "tsoa"
import config from 'config'
import log, { LogLevelDesc } from 'loglevel'
import { games, Game, Games, GameTypes } from '../models/games'
log.setLevel(config.get<LogLevelDesc>('LOG_LEVEL'))

@Route('/games')
export class gamesController extends Controller{

    @Get('/all')
    public async getGames (): Promise<Games> {
        return games.getAll()
    }

    @Get('/get/{id}')
    public async getGame (@Path() id: number): Promise<Game> {
        return games.get(id)
    }

    @Post('/new-game/{gameType}')
    public async createGame (@Path() gameType: GameTypes): Promise<void> {
        await games.createNewGame(gameType)
    }
}

export const db = new gamesController()
