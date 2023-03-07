import express from 'express'
import cors from 'cors'
import updatePlayer, { addFormation, addPlayer, getFormation, get442 } from './src/functions.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Api working'))

app.get('/formation', getFormation)
app.post('/formation', addFormation)

app.get('/players/442', get442)
app.post('/players', addPlayer)
// app.patch('/players/:i/:j', updatePlayer)


app.listen('4040', () => console.log('listening on port 4040'))