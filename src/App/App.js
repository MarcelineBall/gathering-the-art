import React, { Component } from 'react'
import Gallery from '../Gallery/Gallery'
import cards from '../mockData.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: cards
    }
  }

  render() {
    return(
      <main>
        <h1>Gathering the Art</h1>
        <h2>Art so good it's Magic</h2>

      </main>
    )
  }
}

export default App;
