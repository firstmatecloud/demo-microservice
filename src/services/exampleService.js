import exampleRepo from "../repos/exampleRepo.js"

export class ExampleService {

    async getById(id) {
        return await exampleRepo.getById(id)
    }


}

export default new ExampleService();