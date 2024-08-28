import mongoDBClient from '../config/mongoConfig.js';
import {makeObjectId} from "./utils/mongoDbUtils.js";

class ExampleRepo{

    async getById(orgId){
        const collectionClient = await mongoDBClient.collection("example")
        return  await collectionClient.findOne({
            _id: makeObjectId(orgId)
        });
    }
}

export default new ExampleRepo();