import React, { Component } from 'react'
import Gallery from '../Gallery/Gallery'
import { cards, artists } from '../mockData.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: cards,
      artists: artists
    }
  }

  render() {
    return(
      <main>
        <h1>Gathering the Art</h1>
        <h2>Art so good it's Magic</h2>
        <Gallery cards={this.state.cards} />
      </main>
    )
  }
}

export default App;
