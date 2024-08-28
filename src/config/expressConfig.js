import expressConfig from 'express';import cors from "cors";
import PinoHttp from 'pino-http'
import {errorMiddleware} from "../middleware/errorMiddleware.js";
import routes from "../routes/index.js"
const app = expressConfig();

app.get("/health", (req, res) => res.json({status: "API server running"}));

app.use(expressConfig.json({limit: '200mb'}));
app.use(expressConfig.urlencoded({
    limit: '200mb',
    extended: true
}))

app.use(PinoHttp());
app.use(cors());


app.options("*", cors());

app.use(`/api/v1`, routes);

app.use(errorMiddleware)

export default app;

