import React from 'react'
import useGenres from '../hooks/useGenres'
import useData, { Genre } from '../hooks/useData'

const GenreList = () => {
    const {data} =  useGenres();
  return (
    <ul>
      {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList