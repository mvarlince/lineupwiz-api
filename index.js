import express from 'express'
import cors from 'cors'
import { addFormation, addPlayer, getFormation, updatePlayer, getFormationByDoc } from './src/functions.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Api working'))

app.get('/formations', getFormation)
app.post('/formation', addFormation)

app.post('/players/:formation', addPlayer)

app.get('/formation/:formation', getFormationByDoc)

// app.get('/formation/:formationid', getFormationByDoc)
// app.get('/players/433', get433)
// app.get('/players/343', get343)
app.patch('/players/:formation/:_id', updatePlayer)

app.listen('4040', () => console.log('listening on port 4040'))     