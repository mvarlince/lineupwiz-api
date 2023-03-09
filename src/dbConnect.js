import { MongoClient } from "mongodb";

export default function db_connect() {
    const client = new MongoClient(process.env.DB_URI)
    return client.db(process.env.DB)
}