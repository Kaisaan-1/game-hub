import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Center, Heading, Image, position } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"} borderRadius={10} >
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'} textAlign={"justify"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
