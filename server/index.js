const express = require('express')

const cors = require('cors')

const app = express()

const gamesController = require('./controllers/gamesController')

app.use(express.json())

app.use(cors())

app.get('/api/games', gamesController.getGamesList)

app.put('/api/games/:id', gamesController.editGamesList)

app.post('/api/games', gamesController.addGamesList)

app.delete('/api/games/:id', gamesController.deleteGamesList)

app.put('/api/games/upstatus/:id', gamesController.addStatus)

app.put('/api/games/downstatus/:id', gamesController.deleteStatus)

const PORT = 4040

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))