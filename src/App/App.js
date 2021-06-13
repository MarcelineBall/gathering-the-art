import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import artists from '../magicArtists.js'
import Gallery from '../Gallery/Gallery'
import Artist from '../Artist/Artist'
import { getCards } from '../api-calls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      artists: artists,
      favorites: [],
      error: null
    }
  }

  makeFavorite = (id) => {
    const favoritedCard = this.state.cards.find(card => card.id === id)
    this.setState({ favorites: [...this.state.favorites, favoritedCard] })
  }

  getCardsByArtist = (artistName) => {
    getCards(artistName)
      .then(data => {
        this.setState({ cards: data.cards })
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  handleError = (response) => {
    if (!response.ok) {
      this.setState({ error: 'Unable to find art by this artist, please try again!'})
    } else {
      return response.json()
    }
  }

  render() {
    return(
      <main>
        <h1>Gathering the Art</h1>
        <h2>Art so good it's Magic</h2>
        <Switch>
          <Route exact path='/favorites' render={() => {
            return(
              <>
                <Link to='/'>
                  <h2>Home</h2>
                </Link>
                <Gallery cards={this.state.favorites} />
              </>
            )
          }} />
          <Route path='/:artist' render={({ match }) => {
            console.log(this.state.cards)
            const { artist } = match.params
            if (!this.state.cards.length) {
              this.getCardsByArtist(artist)
            } else {
              console.log('it didn\'t work', this.state.cards)
            }
            return(
              <>
              <Link to='/'>
                <h2>Home</h2>
              </Link>
              <Link to='/favorites'>
                <h2>View favorites</h2>
              </Link>
              <Gallery cards={this.state.cards} makeFavorite={this.makeFavorite}/>
              </>
            )
          }} />
          <Route exact path='/' render={() => {
            return(
              <>
              <Link to='/favorites'>
                <h2>View favorites</h2>
              </Link>
              <Artist artists={this.state.artists} getCardsByArtist={this.getCardsByArtist}/>
              </>
            )
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
