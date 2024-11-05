import exampleRepo from "../repos/exampleRepo.js"
import logger from "./utils/logger.js";

export class NewService {

    async getById(id) {
        logger.info("Getting data by ID.")
        return await exampleRepo.getById(id);
    }

    async getDataFromRepo(id) {
        return await exampleRepo.getData(id);
    }


}

export default new NewService();