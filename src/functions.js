import db_connect from "./dbConnect.js";

export async function getFormation(req, res){
    const db = db_connect()

    const content = await db.collection('formations')
        .find({})
        .toArray()

    res.send(content)
}

export async function addFormation(req, res){
    console.log('running function')

    const formation = req.body
    const db = db_connect()
    
    console.log('connected to db')

    await db.collection('formations')
        .insertOne(formation)
        .catch( err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send('formation inserted')
}