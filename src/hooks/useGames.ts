import { GameQuery } from "../App";
import useData, { Genre } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//creating a file for hooks

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (
 gameQuery:GameQuery
) =>
  useData<Game>(
    "/games",
    {//calling the server
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id, 
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery],
  );

export default useGames;
