import logger from "../utils/logger.js";

export async function errorMiddleware (err, req, res)  {
    logger.error({err},"Error not handled correctly")
    res.status(400)
    res.send({ code: err.code,  message: err.message })
}
