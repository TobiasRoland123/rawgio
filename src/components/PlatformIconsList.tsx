import React from 'react';
import { Platform } from '../hooks/useGames';
import { HStack, Text } from '@chakra-ui/react';
import PlatformIcon from './PlatformIcon';

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  return (
    <HStack
      spacing={2}
      as={'ul'}
    >
      {platforms.map((platform) => (
        <li key={`platform-${platform.id}`}>
          <PlatformIcon platformSlug={platform.slug} />
        </li>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
