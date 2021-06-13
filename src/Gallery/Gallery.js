import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const Gallery = ( {cards, makeFavorite} ) => {
  if (cards) {
    const allCards = cards.map(card => {
      return(
        <Card
        id={card.id}
        key={card.id}
        name={card.name}
        artist={card.artist}
        imageUrl={card.imageUrl}
        makeFavorite={makeFavorite}
        />
      )
    })
    return allCards
  } else {
    return <h2>You have not favorited any art yet</h2>
  }
}

Gallery.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    imageUrl: PropTypes.string,
  })),
  makeFavorite: PropTypes.func
}

export default Gallery
