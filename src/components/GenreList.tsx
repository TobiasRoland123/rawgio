import useGenres, { Genre } from '../hooks/useGenres';
import { Heading, HStack, Image, List, ListItem, SkeletonText } from '@chakra-ui/react';
import { getCroppedImageUrl } from '../services/image-urls';
import { Spinner } from '@chakra-ui/react';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading
        as={'h3'}
        size={'md'}
        paddingTop={10}
      >
        Genres
      </Heading>
      <List
        spacing={4}
        paddingTop={4}
      >
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <ListItem key={`Skeleton-genre-${index}`}>
                <HStack>
                  <Spinner />
                  <SkeletonText skeletonHeight='2' />
                </HStack>
              </ListItem>
            ))
          : genres?.map((genre) => (
              <ListItem
                key={genre.id}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
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
    </>
  );
};

export default GenreList;
