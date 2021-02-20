import { routes } from './routes/routes'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { init_db } from './controllers/init-db'

const config = {
    name: 'sample-express-app',
    port: 3001,
    host: '0.0.0.0',
};

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req: any, res: any) => {
    res.status(200).send('hello world')
});

// init and/or migrate db
setInterval(init_db, 5000, () => {console.log("migration done")})

// add routes to api
routes(app)

app.listen(config.port, config.host)
