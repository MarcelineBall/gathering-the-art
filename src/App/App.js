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

  toggleFavorite = (id) => {
    const favoritedCard = this.state.cards.find(card => card.id === id)
    const cardIsFavorited = this.state.favorites.filter(favoritedArt => favoritedArt.id === id)
    if (!cardIsFavorited.length) {
      this.setState({ favorites: [...this.state.favorites, favoritedCard] })
    } else {
      const filteredFavoritedList = this.state.favorites.filter(favoritedArt => favoritedArt.id !== id)
      this.setState({ favorites: filteredFavoritedList })
    }
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
                {!this.state.favorites.length &&
                  <h2>You have not favorited any art yet</h2>}
                {!!this.state.favorites.length &&
                <Gallery cards={this.state.favorites} toggleFavorite={this.toggleFavorite}/>}
              </>
            )
          }} />
          <Route path='/:artist' render={({ match }) => {
            const { artist } = match.params
            if (!this.state.cards.length) {
              this.getCardsByArtist(artist)
            }
            return(
              <>
              <Link to='/'>
                <h2>Home</h2>
              </Link>
              <Link to='/favorites'>
                <h2>View favorites</h2>
              </Link>
              {this.state.error &&
                <h1>There was an error loading the art</h1>}
              {!this.state.cards.length && !this.state.error &&
                <h1>Art is loading</h1>}
              {!!this.state.cards.length &&
                <Gallery cards={this.state.cards} toggleFavorite={this.toggleFavorite}/>}
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
