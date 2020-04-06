
\c postgres

DROP DATABASE IF EXISTS api;
CREATE DATABASE api;

\c api

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE game_types AS ENUM ('free', 'tarot', 'poker');

CREATE TABLE games (
    id          SERIAL      PRIMARY KEY,
    game_type   game_types  NOT NULL,
    start_time  TIMESTAMP   DEFAULT NOW(),
    end_time    TIMESTAMP
);

CREATE TABLE players (
    id            SERIAL        PRIMARY KEY,
    game_id       SERIAL        REFERENCES games(id),
    player_name   VARCHAR(30)   NOT NULL,
    player_token  UUID          UNIQUE  DEFAULT uuid_generate_v4(),
    creation_time TIMESTAMP             DEFAULT NOW(),
    UNIQUE(player_name, id)
);

