import React from 'react';
import useGenres from '../hooks/useGenres';
import { Heading, HStack, Image, List, ListItem } from '@chakra-ui/react';
import { getCroppedImageUrl } from '../services/image-urls';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <List spacing={4}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack gap={4}>
            <Image
              boxSize={8}
              objectFit={'cover'}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Heading
              as={'h4'}
              size={'sm'}
            >
              {genre.name}
            </Heading>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
