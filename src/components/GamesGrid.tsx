import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useData";


interface Props{
  selectedGenre: Genre | null
}

const GamesGrid = ({selectedGenre}:Props) => { 
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [...Array(20)];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={8}
      >
        {isLoading &&   
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} >
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer  key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
