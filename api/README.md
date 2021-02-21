# set the api

The api is able to be launched on your local computer.<br />
There is two ways to run the api: on your computer or in a docker container.

## Start the server

Note that starting the api from here will only up the api but not the DB.<br />
To test full app, start everything at once like discribed in [README](../README.md)

### to run on your computer:
you'll need to install on your computer: nodejs, npm<br />
Then run those commands to start the service:
* `yarn install --save-dev` (to install javascript/typescript dependencies)
* `yarn start-dev` (to start with ts_node interpreter)
* `yarn build++` (after code changes: run linter, regenerate openapi routes and specs, and build project)
* `yarn build++ && yarn start` (to transpile typescript project in node and start built server)

### to run with docker:
you'll need to install on your computer: docker
* `docker-compose build` (to build the docker image locally)
* `docker-compose up` (to start the docker container, and so the server)

## Access the server (Hello World)

Once the server is started (wether in local or in docker), just open `http://localhost:3001/docs` to connect to Swagger documentation.
