import express from "express";
const app = express();
import exampleRouter from './exampleRouter.js'

app.use(`/example`, exampleRouter );


export default app;