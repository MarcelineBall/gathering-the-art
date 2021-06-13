import React from 'react'
import PropTypes from 'prop-types'

const Card = ( {name, artist, imageUrl, id, makeFavorite} ) => {
  return(
    <article>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <button onClick={() => makeFavorite(id)}>Favorite</button>
    </article>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  imageUrl: PropTypes.string,
  makeFavorite: PropTypes.func
}

export default Card
