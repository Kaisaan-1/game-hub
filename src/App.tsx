import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenerList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem  area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem  area="aside">
          <GenerList/>
        </GridItem>
      </Show>
      <GridItem  area="main">
        <GamesGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
