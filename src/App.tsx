import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Show, Hide } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiClient } from './services/api-client';
import { GameGrid } from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `
                  "Nav Nav"
                  "Aside main"
                  `,
        base: `
                  "Nav" 
                  "main"
                  `,
      }}
    >
      <GridItem
        pl='2'
        area={'Nav'}
      >
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem
          pl='2'
          area={'Aside'}
        >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem
        pl='2'
        area={'main'}
      >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
