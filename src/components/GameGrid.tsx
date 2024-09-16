import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={10}
    >
      {error && <Text>{error}</Text>}

      {games &&
        games.map((game) => (
          <GameCard
            game={game}
            key={game.id}
          />
        ))}
    </SimpleGrid>
  );
};
