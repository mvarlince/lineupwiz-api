import express from 'express'
import cors from 'cors'
import { addFormation, addPlayer, getFormation, updatePlayer, getFormationByDoc } from './src/functions.js'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Api working'))

app.get('/formations', getFormation)
app.post('/formation', addFormation)

app.post('/players/:formation', addPlayer)
app.patch('/players/:formation/:_id', updatePlayer)

app.get('/formation/:formation', getFormationByDoc)


app.listen('4040', () => console.log('listening on port 4040'))     