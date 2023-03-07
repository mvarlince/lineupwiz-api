import express from 'express'
import cors from 'cors'
import updatePlayer, { addFormation, addPlayer, getFormation, get442, get433, get343 } from './src/functions.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Api working'))

app.get('/formation', getFormation)
app.post('/formation', addFormation)

app.post('/players', addPlayer)

app.get('/players/442', get442)
app.get('/players/433', get433)
app.get('/players/343', get343)
// app.patch('/players/:i/:j', updatePlayer)


app.listen('4040', () => console.log('listening on port 4040'))