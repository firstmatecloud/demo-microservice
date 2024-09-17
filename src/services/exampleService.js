import exampleRepo from "../repos/exampleRepo.js"
import config from "../config/appConfig.js"
import logger from "../utils/logger.js";

export class ExampleService {

    async getById(id) {
        const example = config.exampleConfig()
        logger.debug("config", example)
        return await exampleRepo.getById(id)
    }


}

export default new ExampleService();