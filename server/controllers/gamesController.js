const gamesList = require('../games.json')

let id = 6

module.exports = {
    getGamesList: (req, res) => {
        res.status(200).send(gamesList)
    },

    addGamesList: (req, res) => {
        const { game } = req.body

        const newGame = {
            name: game,
            id: id,
            status: 0
        }

        id++

        gamesList.push(newGame)
        res.status(200).send(gamesList)
    },

    editGamesList: (req, res) => {
        const { id } = req.params

        const { name } = req.body

        const index = gamesList.findIndex(element => {
            return element.id === +id
        })

        gamesList[index].name = name

        res.status(200).send(gamesList)
    },

    deleteGamesList: (req, res) => {
        const { id } = req.params

        const index = gamesList.findIndex(element => {
            return element.id === +id
        })

        gamesList.splice(index, 1)

        res.status(200).send(gamesList)
    },

    addStatus: (req, res) => {
        const { id } = req.params

        const index = gamesList.findIndex(element => {
            return element.id === +id
        })

        gamesList[index].status++

        res.status(200).send(gamesList)
    },

    deleteStatus: (req, res) => {
        const { id } = req.params

        const index = gamesList.findIndex(element => {
            return element.id === +id
        })

        gamesList[index].status--

        res.status(200).send(gamesList)
    }
}