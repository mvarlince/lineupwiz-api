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
        .find({})
        .toArray()
    res.send(content)
}

export async function get343(req, res){
    const db = db_connect()
    const content = await db.collection('3-4-3')
        .find({})
        .toArray()
    res.send(content)
}

export async function get433(req, res){
    const db = db_connect()

    const content = await db.collection('4-3-3')
        .find({})
        .toArray()
    res.send(content)
}

export async function addPlayer(req, res){
    const data = req.body
    const { formation } = req.params
    const db = db_connect()

    await db.collection(formation)
        .updateOne({ _id: data._id }, { $set: { name: data.name, jersey: data.jersey }}, { upsert: true })
        .catch( err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send('player inserted')
}

export async function updatePlayer(req, res){
    console.log('running function')

    const {_id} = req.params
    const {name, jersey} = req.body

    const db = db_connect()
    console.log('db connected')

    await db.collection('players')

    .updateOne({ _id }, { $set: { name, jersey }}, { upsert: true })
        // .updateOne(
        //     {_id: new ObjectId(id)},
        //     { $set: {name, jersey}}
        // )
        .then( () => getPlayers(req, res))  //get updated players
        .catch(err => console.log(err))
    res.status(200).send({ message: 'Player updated' });
    console.log('done')
}
