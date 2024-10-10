import exampleRepo from "../repos/exampleRepo.js"
import logger from "../utils/logger.js";

export class ExampleService {

    async getById(id) {
        const example = await exampleRepo.getById(id)
        logger.info({example}, "Let's log this sensitive business object")
        return example
    }


}

export default new ExampleService();