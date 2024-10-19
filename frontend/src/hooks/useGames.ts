import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from '../hooks/usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// Re-exporting Platform so other files can import it
export type { Platform };

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        stores: gameQuery.store?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
