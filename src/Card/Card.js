import React from 'react'

const Card = ( {name, artist, imageUrl} ) => {
  return(
    <article>
      <img src={imageUrl} alt={name} />
      
    </article>
  )
}

export default Card
