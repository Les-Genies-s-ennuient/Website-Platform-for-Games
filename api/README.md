# set the api

The api is able to be launched on your local computer.<br />
There is two ways to run the api: on your computer or in a docker container.

## Start the server

### to run on your computer:
you'll need to install on your computer: nodejs, npm<br />
Then run those commands to start the service:
* `npm install` (to install javascript dependencies)
* `npm start` (to start the node server)
* `npm run dev` (to start the node server with nodemon, and so do hot reload)

### to run with docker:
you'll need to install on your computer: docker
* `docker-compose build` (to build the docker image locally)
* `docker-compose up` (to start the docker container, and so the server)

## Access the server (Hello World)

Once the server is started (wether in local or in docker), just open `http://localhost:3000/` to see the Hello World message.<br />
Each http GET request to `http://localhost:3000/` will have an Hello World in return
