import React from 'react'
import PropTypes from 'prop-types'

const Card = ( {name, artist, imageUrl, id, toggleFavorite} ) => {
  return(
    <article>
      <img className='card-image' src={imageUrl} alt={name} />
      <h2 className='cardName'>{name}</h2>
      <button className='button' onClick={() => toggleFavorite(id)}>Favorite</button>
    </article>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  imageUrl: PropTypes.string,
  toggleFavorite: PropTypes.func
}

export default Card
