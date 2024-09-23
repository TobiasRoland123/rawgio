import { Grid, GridItem } from '@chakra-ui/react';
import { Show } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
import { GameGrid } from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `
                  "nav nav"
                  "Aside main"
                  `,
        base: `
                  "nav" 
                  "main"
                  `,
      }}
      templateColumns={{
        lg: '200px 1fr',
        base: '1fr',
      }}
    >
      <GridItem
        pl='2'
        area={'nav'}
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
