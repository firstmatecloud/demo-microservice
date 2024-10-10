import exampleRepo from "../repos/exampleRepo.js"
import logger from "../utils/logger.js";

export class ExampleService {

    async getById(id) {
        const userDetails = await exampleRepo.getById(id)
        logger.info({userDetails}, "UserDetails object retrieved")
        return userDetails
    }
}

export default new ExampleService();