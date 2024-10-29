import exampleRepo from "../repos/exampleRepo.js"

export class ExampleService {

    async getById(id) {
        const example = await exampleRepo.getById(id)
        if(!example){
            throw new Error(`Example with ${id} does not exist`)
        }
        return example;
    }


}

export default new ExampleService();