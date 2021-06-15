import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const Gallery = ( {cards, toggleFavorite} ) => {
    const allCards = cards.map(card => {
      return(
        <Card
        id={card.id}
        key={card.id}
        name={card.name}
        imageUrl={card.imageUrl}
        toggleFavorite={toggleFavorite}
        />
      )
    })
    return allCards
}

Gallery.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  })),
  toggleFavorite: PropTypes.func
}

export default Gallery
