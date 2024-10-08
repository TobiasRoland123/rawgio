import useStores from '../hooks/useStores';
import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { getCroppedImageUrl } from '../services/image-urls';
import { useState } from 'react';

const Stores = () => {
  const { data: stores } = useStores();
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedStores = isExpanded ? stores : stores.slice(0, 5);
  return (
    <>
      <Text fontSize={'30px'}>Stores</Text>
      <List
        spacing={4}
        paddingTop={4}
      >
        {displayedStores?.map((store) => (
          <ListItem
            key={store.id}
            paddingY='5px'
          >
            <HStack>
              <Image
                alt={store.name}
                src={getCroppedImageUrl(store.image_background)}
                borderRadius={8}
                boxSize='30px'
                objectFit={'cover'}
              />
              <Text fontSize='lg'>{store.name}</Text>
            </HStack>
          </ListItem>
        ))}
        {stores.length > 5 && (
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

export default Stores;
