import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Artist = ({ artists, getCardsByArtist }) => {
  const allArtists = artists.map(artist => {
    return(
      <Link to={`/${artist}`} key={artist}>
        <p onClick={() => getCardsByArtist(artist)}>{artist}</p>
      </Link>
    )
  })
  return allArtists
}

export default Artist
