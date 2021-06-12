import React from 'react'

const Card = ( {name, artist, imageUrl, makeFavorite} ) => {
  return(
    <article>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <button>Favorite</button>
    </article>
  )
}

export default Card
