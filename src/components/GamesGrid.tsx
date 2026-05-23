import React, { useEffect, useState } from 'react'
import apiClient from '../serivices/api-client'
import useGames from '../hooks/useGames'



const GamesGrid = () => {
 
const {games, error}= useGames()

  return (
    <ul>
      {games.map(game=> <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GamesGrid