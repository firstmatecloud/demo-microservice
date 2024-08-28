import {ObjectId} from "mongodb";

export function makeObjectId(id){
    if(typeof id === 'string'){
        return new ObjectId(id)
    }
    return id;
}