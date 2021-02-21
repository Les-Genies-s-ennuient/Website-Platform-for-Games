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

    /**
     * get all games registered
     */
    @Get('/all')
    public async getGames (): Promise<Games> {
        return games.getAll()
    }

    /**
     * return infos about the Game Id requested
     * @param id gameId
     */
    @Get('/get/{id}')
    public async getGame (@Path() id: number): Promise<Game> {
        return games.get(id)
    }

    /**
     * Create a new game
     * @param gameType which type of game do you want to create
     * @returns gameId of the game created
     */
    @Post('/new-game/{gameType}')
    public async createGame (@Path() gameType: GameTypes): Promise<number> {
        return games.createNewGame(gameType)
    }
}

export const db = new gamesController()
