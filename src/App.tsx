import { Grid, GridItem } from '@chakra-ui/react';
import { Show, Hide } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';

const apiClient = axios.create({ baseURL: 'https://api.rawg.io/api', params: { key: import.meta.env.VITE_API_KEY } });

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<GameResponse>('/games')
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

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
          bg='pink.300'
          area={'Aside'}
        >
          Aside
        </GridItem>
      </Show>
      <GridItem
        pl='2'
        bg='green.300'
        area={'main'}
      >
        {games && games.map((game) => <h1 key={game.id}>{game.name}</h1>)}
      </GridItem>
    </Grid>
  );
}

export default App;
