import React from 'react';
import useGenres from '../hooks/useGenres';
import { Heading, HStack, Image } from '@chakra-ui/react';

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <div key={genre.id}>
          <HStack gap={4}>
            <Image
              width={8}
              height={8}
              src={genre.image_background}
              alt={genre.name}
            />
            <Heading
              as={'h4'}
              size={'sm'}
            >
              {genre.name}
            </Heading>
          </HStack>
        </div>
      ))}
    </>
  );
};

export default GenreList;
