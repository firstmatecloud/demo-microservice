import app from "./config/expressConfig.js";
import configuration from "./config/appConfig.js";
import logger from "./utils/logger.js";

app.listen(configuration.serverPort(), () => {
    logger.info({ message: `Listening to port ${configuration.serverPort()}` });
});


