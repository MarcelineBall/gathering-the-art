import React from 'react'
import Card from '../Card/Card'

const Gallery = ( {cards} ) => {
  const allCards = cards.map(card => {
    return(
      <Card
        id={card.id}
        key={card.id}
        name={card.name}
        artist={card.artist}
        imageUrl={card.imageUrl}
      />
    )
  })
  return <p>This is where the art will go</p>
}

export default Gallery
