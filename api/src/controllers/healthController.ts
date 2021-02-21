import {
    Controller,
    Get,
    Route,
  } from "tsoa"

@Route('/health')
export class healthController extends Controller{

    /**
     * get all games registered
     */
    @Get()
    public async getHealth (): Promise<string> {
        return 'api server is up and running'
    }
}

export const db = new healthController()
