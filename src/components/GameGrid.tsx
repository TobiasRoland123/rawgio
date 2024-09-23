import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames({ selectedGenre, selectedPlatform });
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={10}
    >
      {error && <Text>{error}</Text>}

      {isLoading
        ? Array.from({ length: 20 }).map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : games &&
          games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};
