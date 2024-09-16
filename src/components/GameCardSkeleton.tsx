import { Card, CardBody, CardHeader, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton />
      <CardHeader>
        <Skeleton
          aspectRatio={6 / 4}
          width='100%'
          my={2}
        />
      </CardHeader>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
