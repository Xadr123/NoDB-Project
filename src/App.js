import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import NotPlayed from './components/NotPlayed'
import InProgress from './components/InProgress'
import HavePlayed from './components/HavePlayed'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      gamesNotPlayed: [],
      gamesInProgress: [],
      gamesPlayed: []
    }

    this.addGame = this.addGame.bind(this)
    this.editGame = this.editGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.parseArray = this.parseArray.bind(this)
    this.addStatus = this.addStatus.bind(this)
  }

  componentDidMount() {
    axios.get('/api/games').then((res) => {
      let gamesLists = this.parseArray(res.data)
      this.setState({
        gamesNotPlayed: gamesLists.notPlayed,
        gamesInProgress: gamesLists.inProgress,
        gamesPlayed: gamesLists.havePlayed,
        allGames: res.data
      })
    })
  }

  addStatus(id) {
    axios.put(`/api/games/status/${id}`).then((res) => {
      let gamesLists = this.parseArray(res.data)
      this.setState({
        gamesNotPlayed: gamesLists.notPlayed,
        gamesInProgress: gamesLists.inProgress,
        gamesPlayed: gamesLists.havePlayed,
        allGames: res.data
      })
    })
  }

  addGame(game) {
    axios.post('/api/games', { game }).then(res => {
      let gamesLists = this.parseArray(res.data)
      this.setState({
        gamesNotPlayed: gamesLists.notPlayed,
        gamesInProgress: gamesLists.inProgress,
        gamesPlayed: gamesLists.havePlayed,
        allGames: res.data
      })
    })
  }

  editGame(id, newName) {
    axios.put(`/api/games/${id}`, { name: newName }).then(res => {
      let gamesLists = this.parseArray(res.data)
      this.setState({
        gamesNotPlayed: gamesLists.notPlayed,
        gamesInProgress: gamesLists.inProgress,
        gamesPlayed: gamesLists.havePlayed,
        allGames: res.data
      })
    })
  }

  deleteGame(id) {
    axios.delete(`/api/games/${id}`).then(res => {
      let gamesLists = this.parseArray(res.data)
      this.setState({
        gamesNotPlayed: gamesLists.notPlayed,
        gamesInProgress: gamesLists.inProgress,
        gamesPlayed: gamesLists.havePlayed,
        allGames: res.data
      })
    })
  }

  parseArray(array) {
    return array.reduce((acc, e) => {
      if (e.status === 0) {
        acc.notPlayed.push(e)
      } else if (e.status === 1) {
        acc.inProgress.push(e)
      } else if (e.status === 2) {
        acc.havePlayed.push(e)
      }

      return acc
    }, { notPlayed: [], inProgress: [], havePlayed: [] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="games-section">
          <NotPlayed notPlayed={this.state.gamesNotPlayed} editGame={this.editGame} addGame={this.addGame} deleteGame={this.deleteGame} parseArray={this.parseArray} allGames={this.state.allGames} addStatus={this.addStatus} />
          <InProgress inProgress={this.state.gamesInProgress} deleteGame={this.deleteGame} parseArray={this.parseArray} allGames={this.state.allGames} addStatus={this.addStatus} />
          <HavePlayed havePlayed={this.state.gamesPlayed} deleteGame={this.deleteGame} parseArray={this.parseArray} allGames={this.state.allGames} />
        </section>
      </div>
    )
  }
}

export default App;
