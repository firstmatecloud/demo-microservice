import exampleRepo from "../repos/exampleRepo.js"

export class ExampleService {

    async getById(id) {
        const result = await exampleRepo.getById(id)
        return result.success
    }


}

export default new ExampleService();