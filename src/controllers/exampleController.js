import exampleService from "../services/exampleService.js";

class ExampleController {

    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const response = await exampleService.getById(id);
            return res.send(response);
        } catch (err) {
            next(err);
        }
    }

}

export default new ExampleController();