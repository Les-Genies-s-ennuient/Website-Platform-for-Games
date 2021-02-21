import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Route,
  } from "tsoa"
import config from 'config'
import log, { LogLevelDesc } from 'loglevel'
import { players, Players, CreatePlayerRequest } from '../models/players'
log.setLevel(config.get<LogLevelDesc>('LOG_LEVEL'))

@Route('/players')
export class playersController extends Controller{

    @Get('/get/{gameId}')
    public async getPlayers (@Path() gameId: number): Promise<Players> {
        return players.getInGame(gameId)
    }

    @Post('/new-player')
    public async createPlayer (@Body() body: CreatePlayerRequest): Promise<string> {
        return players.createNewPlayer(body.name, body.gameId)
    }
}

export const db = new playersController()
