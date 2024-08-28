import { MongoClient } from "mongodb";

const conn_string = process.env.MONGO_DB_CONNECTION_STRING || "mongodb://localhost:27017";
const databaseName = process.env.MONGO_DB_DB_NAME;

const mongoClient = new MongoClient(conn_string);
const mongoDBClient = mongoClient.db(databaseName)

export default mongoDBClient