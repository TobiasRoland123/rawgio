import { Game } from '../hooks/useGames';
import { Card, CardBody, CardHeader, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../services/image-urls';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={'100%'}>
      <CardHeader padding={0}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={`game art for ${game.name}`}
          aspectRatio={6 / 4}
          objectFit={'cover'}
          width={'100%'}
        />
      </CardHeader>
      <CardBody>
        <HStack justifyContent={'space-between'}>
          <PlatformIconsList platforms={game.parent_platforms.map(({ platform }) => platform)} />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
        <Heading
          marginTop={4}
          as={'h2'}
        >
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
