import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ArtistList = ({ artists, getCardsByArtist }) => {
  const allArtists = artists.map(artist => {
    const modifiedArtist = artist.split(' ').join('_')
    console.log(modifiedArtist)
    return(
      <Link to={`/${modifiedArtist}`} key={modifiedArtist}>
        <p onClick={() => getCardsByArtist(modifiedArtist)}>{artist}</p>
      </Link>
    )
  })
  return allArtists
}

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.string),
  getCardsByArtist: PropTypes.func
}

export default ArtistList
