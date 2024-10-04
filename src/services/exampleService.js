import exampleRepo from "../repos/exampleRepo.js"

export class ExampleService {

    async getById(id) {
        const result =  await exampleRepo.getById(id)
        console.log("example", result)
        return result
    }


}

export default new ExampleService();