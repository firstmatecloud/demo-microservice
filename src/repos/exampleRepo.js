import mongoDBClient from '../config/mongoConfig.js';
import {makeObjectId} from "./utils/mongoDbUtils.js";

class ExampleRepo {

    async getById(orgId) {
        if (!orgId) {
            throw Error('cannot divide by zero')
        }
        const collectionClient = await mongoDBClient.collection("example")
        return await collectionClient.findOne({
            testobject_id: makeObjectId(orgId)
        });
    }
}

export default new ExampleRepo();