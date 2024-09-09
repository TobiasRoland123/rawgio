import { useEffect, useState } from 'react';
import { apiClient } from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<GameResponse>('/games')
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);
  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games &&
          games.map((game) => (
            <li key={game.id}>
              <Text>{game.name}💩</Text>
            </li>
          ))}
      </ul>
    </div>
  );
};
