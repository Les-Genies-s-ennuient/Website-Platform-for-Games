/* tslint:disable */
/* eslint-disable */
/**
 * api
 * api for website platform for games
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Game
 */
export interface Game {
    /**
     * 
     * @type {string}
     * @memberof Game
     */
    name: string;
    /**
     * 
     * @type {GameTypes}
     * @memberof Game
     */
    game_type: GameTypes;
    /**
     * 
     * @type {string}
     * @memberof Game
     */
    start_time: string;
    /**
     * 
     * @type {string}
     * @memberof Game
     */
    end_time: string;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum GameTypes {
    Free = 'free',
    Tarot = 'tarot',
    Poker = 'poker'
}

/**
 * 
 * @export
 * @interface Player
 */
export interface Player {
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    game_id: number;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    player_name: string;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    player_token: string;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    creation_time: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new game
         * @param {GameTypes} gameType which type of game do you want to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGame: async (gameType: GameTypes, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'gameType' is not null or undefined
            assertParamExists('createGame', 'gameType', gameType)
            const localVarPath = `/games/new-game/{gameType}`
                .replace(`{${"gameType"}}`, encodeURIComponent(String(gameType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Register a new player for a game
         * @param {string} name name of the player you want to register
         * @param {number} gameId gameId for which you want to register the player
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlayer: async (name: string, gameId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('createPlayer', 'name', name)
            // verify required parameter 'gameId' is not null or undefined
            assertParamExists('createPlayer', 'gameId', gameId)
            const localVarPath = `/players/new-player`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (gameId !== undefined) {
                localVarQueryParameter['gameId'] = gameId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return infos about the Game Id requested
         * @param {number} id gameId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGame: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGame', 'id', id)
            const localVarPath = `/games/get/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * get all games registered
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGames: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/games/all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * get all games registered
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealth: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * get player infos for a specific game
         * @param {number} gameId gameId for which you want players
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayers: async (gameId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'gameId' is not null or undefined
            assertParamExists('getPlayers', 'gameId', gameId)
            const localVarPath = `/players/get/{gameId}`
                .replace(`{${"gameId"}}`, encodeURIComponent(String(gameId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new game
         * @param {GameTypes} gameType which type of game do you want to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGame(gameType: GameTypes, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createGame(gameType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Register a new player for a game
         * @param {string} name name of the player you want to register
         * @param {number} gameId gameId for which you want to register the player
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPlayer(name: string, gameId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPlayer(name, gameId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * return infos about the Game Id requested
         * @param {number} id gameId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGame(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Game>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGame(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * get all games registered
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGames(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Game>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGames(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * get all games registered
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHealth(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHealth(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * get player infos for a specific game
         * @param {number} gameId gameId for which you want players
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayers(gameId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Player>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayers(gameId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Create a new game
         * @param {GameTypes} gameType which type of game do you want to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGame(gameType: GameTypes, options?: any): AxiosPromise<number> {
            return localVarFp.createGame(gameType, options).then((request) => request(axios, basePath));
        },
        /**
         * Register a new player for a game
         * @param {string} name name of the player you want to register
         * @param {number} gameId gameId for which you want to register the player
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlayer(name: string, gameId: number, options?: any): AxiosPromise<string> {
            return localVarFp.createPlayer(name, gameId, options).then((request) => request(axios, basePath));
        },
        /**
         * return infos about the Game Id requested
         * @param {number} id gameId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGame(id: number, options?: any): AxiosPromise<Game> {
            return localVarFp.getGame(id, options).then((request) => request(axios, basePath));
        },
        /**
         * get all games registered
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGames(options?: any): AxiosPromise<Array<Game>> {
            return localVarFp.getGames(options).then((request) => request(axios, basePath));
        },
        /**
         * get all games registered
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealth(options?: any): AxiosPromise<string> {
            return localVarFp.getHealth(options).then((request) => request(axios, basePath));
        },
        /**
         * get player infos for a specific game
         * @param {number} gameId gameId for which you want players
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayers(gameId: number, options?: any): AxiosPromise<Array<Player>> {
            return localVarFp.getPlayers(gameId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Create a new game
     * @param {GameTypes} gameType which type of game do you want to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createGame(gameType: GameTypes, options?: any) {
        return DefaultApiFp(this.configuration).createGame(gameType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Register a new player for a game
     * @param {string} name name of the player you want to register
     * @param {number} gameId gameId for which you want to register the player
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createPlayer(name: string, gameId: number, options?: any) {
        return DefaultApiFp(this.configuration).createPlayer(name, gameId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return infos about the Game Id requested
     * @param {number} id gameId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getGame(id: number, options?: any) {
        return DefaultApiFp(this.configuration).getGame(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * get all games registered
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getGames(options?: any) {
        return DefaultApiFp(this.configuration).getGames(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * get all games registered
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getHealth(options?: any) {
        return DefaultApiFp(this.configuration).getHealth(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * get player infos for a specific game
     * @param {number} gameId gameId for which you want players
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getPlayers(gameId: number, options?: any) {
        return DefaultApiFp(this.configuration).getPlayers(gameId, options).then((request) => request(this.axios, this.basePath));
    }
}


