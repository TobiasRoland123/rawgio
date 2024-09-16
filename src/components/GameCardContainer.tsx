import { Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      maxWidth={{ base: '100%', md: '430px', lg: '300px' }}
      overflow={'hidden'}
      borderRadius={'10px'}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
