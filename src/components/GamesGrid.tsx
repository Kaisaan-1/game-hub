import React, { useEffect, useState } from 'react'
import apiClient from '../serivices/api-client'

   interface Game{
    id: number;
    name: string;
}

interface FetchGamesResponse{
    count: number;
    results: Game[];
}


const GamesGrid = () => {
 
const [games, getGames]=useState<Game[]>([])
const [error, setError]=useState('')
  
useEffect(()=>{
    apiClient.get<FetchGamesResponse>('/games')
    .then(res => getGames(res.data.results))
    .catch(err => setError(err.message))
})

  return (
    <div>GamesGrid</div>
  )
}

export default GamesGrid