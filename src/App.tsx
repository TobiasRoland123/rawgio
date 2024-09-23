import { Grid, GridItem } from '@chakra-ui/react';
import { Show } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
import { GameGrid } from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
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
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem
        pl='2'
        area={'main'}
      >
        <PlatformSelector
          onSelectPlatform={(platform) => {
            setSelectedPlatform(platform);
          }}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
