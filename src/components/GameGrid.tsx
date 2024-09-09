import { useEffect, useState } from 'react';
import { apiClient } from '../services/api-client';
import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

export const GameGrid = () => {
  const { games, error } = useGames();
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
