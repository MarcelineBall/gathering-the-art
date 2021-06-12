import React from 'react'
import { Link } from 'react-router-dom'

const Artist = ({ artists }) => {
  const allArtists = artists.map(artist => {
    return(
      <Link to={`/${artist}`} key={artist}>
        <p>{artist}</p>
      </Link>
    )
  })
  return allArtists
}

export default Artist
