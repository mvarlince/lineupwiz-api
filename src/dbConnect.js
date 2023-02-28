import { MongoClient } from "mongodb";
import { credentials } from "../uri.js";

export default function db_connect(){
    const client = new MongoClient(credentials.uri)
    return client.db(credentials.db)
}