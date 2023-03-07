import { ObjectId } from "mongodb";
import db_connect from "./dbConnect.js";

export async function getFormation(req, res){
    const db = db_connect()

    const content = await db.collection('formations')
        .find({})
        .toArray()

    res.send(content)
}

export async function addFormation(req, res){
    const info = req.body
    const db = db_connect()

    await db.collection('formations')
        .insertOne(info)
        .catch( err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send('formation inserted')
}

export async function get442(req, res){
    const db = db_connect()

    const content = await db.collection('4-4-2')
        .find()
        .toArray()

    res.send(content)
}

export async function addPlayer(req, res){
    const data = req.body
    const db = db_connect()

    await db.collection('4-4-2')
        .insertOne(data)
        .catch( err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send('player inserted')
}

export default async function updatePlayer(req, res){
    console.log('running function')

    const {id} = req.params
    const {name, jersey} = req.body

    const db = db_connect()
    console.log('db connected')

    await db.collection('players')
        .updateOne(
            {_id: new ObjectId(id)},
            { $set: {name, jersey}}
        )
        .then( () => getPlayers(req, res))  //get updated players
        .catch(err => console.log(err))
    res.status(200).send({ message: 'Player updated' });
    console.log('done')
}
