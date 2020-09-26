const routes = require('./src/routes/routes');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const init_db = require('./src/controllers/init-db');

const config = {
    name: 'sample-express-app',
    port: 3001,
    host: '0.0.0.0',
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

// init and/or migrate db
setInterval(init_db.init_db, 5000, () => {console.log("migration done")})

// add routes to api
routes(app)

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
