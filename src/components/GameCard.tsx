import React from 'react';
import { Game, Platform } from '../hooks/useGames';
import { Card, CardBody, CardHeader, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={game.background_image}
          alt={`game art for ${game.name}`}
          aspectRatio={4 / 3}
          objectFit={'cover'}
        />
      </CardHeader>
      <CardBody>
        <Heading as={'h2'}>{game.name}</Heading>
        <PlatformIconsList platforms={game.parent_platforms.map(({ platform }) => platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
