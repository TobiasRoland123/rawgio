import { Grid, GridItem } from '@chakra-ui/react';
import { Show } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
import { GameGrid } from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import Stores from './components/Stores';
import { Store } from './hooks/useStores';
import { Platform } from './hooks/usePlatforms';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  store: Store | null;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          height={'92svh'}
          overflowY={'auto'}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
          <Stores />
        </GridItem>
      </Show>
      <GridItem
        pl='2'
        area={'main'}
      >
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
