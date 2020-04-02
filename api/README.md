# set the api

The api is able to be launched on your local computer.
There is two ways to run the api: on your computer or in a docker container.

## Start the server

### to run on your computer:
you'll need to install on your computer: nodejs, npm
Then run those commands to start the service:
* `npm install` (to install javascript dependencies)
* `node server.js` (to start the node server)

### to run with docker:
you'll need to install on your computer: docker
* `docker-compose build` (to build the docker image locally)
* `docker-compose up` (to start the docker container, and so the server)

## Access the server (Hello World)

Once the server is started (wether in local or in docker), just open `http://localhost:3000/` to see the Hello World message
Each http GET request to `http://localhost:3000/` will have an Hello World in return
