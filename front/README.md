## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

## Run the front-end with Docker

Once docker and docker have being installed, you can launch the front-end service in a docker container like this
1. `docker-compose -f docker-compose.yml build` : this will create the docker image using the docker-compose conf file and the Dockerfile
2. `docker-compose -f docker-compose.yml up` : this will up the docker container with the image built in step 1. The docker container will launch the react app and expose it on port 3000 from localhost 

Once this is done, the website can bbe access at the adress: `http://localhost:3000`
