import {
    Query,
    Controller,
    Get,
    Path,
    Post,
    Route,
  } from "tsoa"
import config from 'config'
import log, { LogLevelDesc } from 'loglevel'
import { players, Players } from '../models/players'
log.setLevel(config.get<LogLevelDesc>('LOG_LEVEL'))

@Route('/players')
export class playersController extends Controller{

    /**
     * get player infos for a specific game
     * @param gameId gameId for which you want players
     */
    @Get('/get/{gameId}')
    public async getPlayers (@Path() gameId: number): Promise<Players> {
        return players.getInGame(gameId)
    }

    /**
     * Register a new player for a game
     * @param name name of the player you want to register
     * @param gameId gameId for which you want to register the player
     * @returns the player token for that game (top keep private)
     */
    @Post('/new-player')
    public async createPlayer (@Query() name: string, @Query() gameId: number): Promise<string> {
        return players.createNewPlayer(name, gameId)
    }
}

export const db = new playersController()
