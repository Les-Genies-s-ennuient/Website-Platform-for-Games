import { RegisterRoutes } from "./routes/routes";
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from 'config'

export const app = express()

app.use(bodyParser.json())
app.use(cors())

// add routes to api
// routes(app)
RegisterRoutes(app)

app.listen(
    config.get('API_PORT'),
    config.get('API_HOST'))
