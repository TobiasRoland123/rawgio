import useGenres, { Genre } from '../hooks/useGenres';
import { Button, Heading, HStack, Image, List, ListItem, SkeletonText } from '@chakra-ui/react';
import { getCroppedImageUrl } from '../services/image-urls';
import { Spinner } from '@chakra-ui/react';
import { useState } from 'react';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data: genres, error, isLoading } = useGenres();
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedGenres = isExpanded ? genres : genres.slice(0, 5);
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
          : displayedGenres.map((genre) => (
              <ListItem
                key={genre.id}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                <HStack
                  gap={4}
                  as={Button}
                  colorScheme={selectedGenre === genre ? 'yellow' : 'gray'}
                >
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
        {genres.length > 5 && (
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            mt={3}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        )}
      </List>
    </>
  );
};

export default GenreList;
