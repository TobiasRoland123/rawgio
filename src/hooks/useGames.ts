import useData from './useData';
import { Genre } from './useGenres';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const useGames = ({ selectedGenre, selectedPlatform }: Props) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id } }, [
    selectedGenre?.id,
    selectedPlatform?.id,
  ]);

export default useGames;
