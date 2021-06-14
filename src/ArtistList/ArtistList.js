import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ArtistList = ({ artists, getCardsByArtist }) => {
  const allArtists = artists.map(artist => {
    return(
      <Link to={`/${artist}`} key={artist}>
        <p onClick={() => getCardsByArtist(artist)}>{artist}</p>
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
