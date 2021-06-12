import React from 'react'
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

export default Gallery
