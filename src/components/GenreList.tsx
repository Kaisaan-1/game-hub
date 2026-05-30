import React from "react";
import useGenres from "../hooks/useGenres";
import useData, { Genre } from "../hooks/useData";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";


interface Props{
  onSelectGenre: (genre: Genre) => void
}
 
const GenreList = ( {onSelectGenre}:Props) => {
  const { data, isLoading , error} = useGenres();



if (error) return null;

  if(isLoading) return<Spinner/>;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='7px' >
          <HStack>
            <Image
              boxSize="32px"
              objectFit={"cover"}  
              borderRadius={8}
              src={genre.image_background}
            />
             <Button onClick={()=> onSelectGenre(genre)} variant='link'  fontSize="lg">{genre.name}</Button >
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
