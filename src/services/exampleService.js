import exampleRepo from "../repos/exampleRepo.js"

export class ExampleService {

    async getById(id) {
        const object = await exampleRepo.getById(id)
        object.success = false
        return object
    }


}

export default new ExampleService();