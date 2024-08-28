import exampleRepo from "../repos/exampleRepo.js"
import axios from "axios"

const api = axios.create({
    baseURL: appConfig.aiServiceUrl(),
    headers: {
        "Content-Type": "application/json",
    },
});

export class ExampleService {

    async getById(id) {
        const result = await api.post("/analyse", {
            id,
        });
        console.log(result.data);
        return await exampleRepo.getById(id)

    }


}

export default new ExampleService();