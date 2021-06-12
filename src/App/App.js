import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
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

  makeFavorite = (id) => {
    this.setState({ favorites: ...this.state.favorites, id})
  }

  render() {
    return(
      <main>
        <h1>Gathering the Art</h1>
        <h2>Art so good it's Magic</h2>
        <Link to='/favorites'>
          <h2>View favorites</h2>
        </Link>
        <Switch>
          <Route path='/favorites' render={() => {
            return <Gallery cards={this.state.favorite} />
          }} />
          <Route path='/:artist' render={({ match }) => {
            const { artist } = match.params
            return <Gallery cards={this.state.cards} makeFavorite={this.makeFavorite}/>
          }} />
          <Route exact path='/' render={() => {
            return <Artist artists={this.state.artists} />
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
