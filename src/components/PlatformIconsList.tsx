import React from 'react';
import { Platform } from '../hooks/useGames';
import { HStack, Text } from '@chakra-ui/react';
import PlatformIcon from './PlatformIcon';

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  return (
    <HStack spacing={2}>
      {platforms.map((platform) => (
        <PlatformIcon platformSlug={platform.slug} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
