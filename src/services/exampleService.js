import exampleRepo from "../repos/exampleRepo.js"
import logger from "../utils/logger.js";

export class ExampleService {

    async getById(id) {
        return await exampleRepo.getById(id)
    }

    async getExcetutedDocuments(id) {
        return await exampleRepo.getById(id)
    }

    async getUserData(id) {
        const user = await exampleRepo.getById(id);
        logger.info(user.data);
    }


}

export default new ExampleService();