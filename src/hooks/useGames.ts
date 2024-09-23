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
}

interface Props {
  selectedGenre: Genre | null;
}

const useGames = ({ selectedGenre }: Props) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);

export default useGames;
