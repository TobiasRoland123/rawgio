import { useEffect, useState } from 'react';
import { apiClient } from '../services/api-client';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  slug: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<GameResponse>('/games')
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return { games, error };
};

export default useGames;
