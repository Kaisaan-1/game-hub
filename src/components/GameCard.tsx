
import { Game } from "../hooks/useGames";
import { Card, CardBody, Center, Heading, HStack, Image, position, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={game.background_image}></Image>
      <CardBody height='200'>
        <Heading fontSize={'2xl'} alignItems={"space-evenly"}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}> 
        <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)}></PlatformIconList>
        <CriticScore score={game.metacritic} ></CriticScore>
        </HStack>
       {/* {game.parent_platforms.map(({platform})=><Text>{platform.name}</Text>)} {/*destructured platform property*/}
      </CardBody>
    </Card>
  );
};

export default GameCard;
