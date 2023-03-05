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

export async function getPlayers(req, res){
    const db = db_connect()

    const content = await db.collection('players')
        .find({})
        .toArray()

    res.send(content)
}

export async function addPlayer(req, res){
    const data = req.body
    const db = db_connect()

    await db.collection('players')
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
        .catch(err => console.log(err))
    res.status(200).send({ message: 'Player updated' });
    console.log('done')
}


// export async function getPlayersByFormation(req, res){
//     const formation = req.body

//     const db = db_connect()

//     await db.collection('players')
//         .find({})
//         .then()
//         .catch( err => {
//             res.status(500).send(err)
//             return
//         })
// }
