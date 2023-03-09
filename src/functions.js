import db_connect from "./dbConnect.js";

export async function getFormation(req, res){
    const db = db_connect()
    const content = await db.collection("formations")
        .find({})
        .toArray()

    res.send(content)
}

export async function getFormationByDoc(req, res){
    const {formation} = req.params
    console.log('formation', formation)
    
    const db = db_connect()
    const content = await db.collection(formation)
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
    const formation = req.params
    const db = db_connect()
    const content = await db.collection('442')
        .find({})
        .toArray()
    res.send(content)
}

export async function get343(req, res){
    const db = db_connect()
    const content = await db.collection('343')
        .find({})
        .toArray()
    res.send(content)
}

export async function get433(req, res){
    const db = db_connect()
    const content = await db.collection('433')
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

    const {formation, _id} = req.params
    const {name, jersey} = req.body

    const db = db_connect()
    console.log('db connected')

    await db.collection(formation)
    .updateOne({ _id }, { $set: { name, jersey }}, { upsert: true })
        .then( () => getFormationByDoc(req, res))  //get updated players
        .catch(err => {
                 res.status(500).send(err)
            return
        })
    console.log('done')
}
