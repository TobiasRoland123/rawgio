import useGenres from '../hooks/useGenres';
import { Heading, HStack, Image, List, ListItem, SkeletonText, Text } from '@chakra-ui/react';
import { getCroppedImageUrl } from '../services/image-urls';
import { Spinner } from '@chakra-ui/react';
const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <List
      spacing={4}
      paddingTop={10}
    >
      {error ? (
        <Text>{error}</Text>
      ) : isLoading ? (
        Array.from({ length: 20 }).map((_, index) => (
          <ListItem key={`Skeleton-genre-${index}`}>
            <HStack>
              <Spinner />
              <SkeletonText skeletonHeight='2' />
            </HStack>
          </ListItem>
        ))
      ) : (
        genres?.map((genre) => (
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
        ))
      )}
    </List>
  );
};

export default GenreList;
