import { RegisterRoutes } from "./routes/routes";
import express, { Response as ExResponse, Request as ExRequest } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from 'config'
import swaggerUi from "swagger-ui-express"

export const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("./specs/swagger.json"))
    );
  });

RegisterRoutes(app)

app.listen(
    config.get('API_PORT'),
    config.get('API_HOST'))
