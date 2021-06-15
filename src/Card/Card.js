import React from 'react'
import PropTypes from 'prop-types'

const Card = ( {name, imageUrl, id, toggleFavorite} ) => {
  return(
    <article>
      <img className='card-image' src={imageUrl} alt={name} />
      <h2 className='card-name'>{name}</h2>
      <button className='button' onClick={() => toggleFavorite(id)}>Favorite</button>
    </article>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  toggleFavorite: PropTypes.func
}

export default Card
