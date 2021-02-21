# Website-Platform-for-Games
Website and API for 'a Platform for Games'

## Install
You'll need to prepare the env both for api and front
* [front doc](./front/README.md)
* [API doc](./api/README.md)

## Local usage
```bash
docker-compose up --build
```
This will create all required docker containers:
* the db (postgres) to host and store informations
* the api server, to interact with the db and receive requests from the website
* the frontend server, which expose the React website
* _an adminer for the (db) container (optional)_

Once all containers are up, you can access the app at those addresses:
* [React website](http://localhost:3000/)
* [API swagger page](http://localhost:3001/docs)
* [pg adminer](http://localhost:8080)
