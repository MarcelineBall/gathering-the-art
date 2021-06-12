import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { cards, artists } from '../mockData.js'
import Gallery from '../Gallery/Gallery'
import Artist from '../Artist/Artist'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: cards,
      artists: artists,
      favorites: []
    }
  }

  render() {
    return(
      <main>
        <h1>Gathering the Art</h1>
        <h2>Art so good it's Magic</h2>
        <Route exact path='/' render={() => {
          return <Artist artists={this.state.artists} />
        }} />
        <Route path='/:artist' render={({ match }) => {
          const { artist } = match.params
          return <Gallery cards={this.state.cards} />
        }} />
      </main>
    )
  }
}

export default App;
