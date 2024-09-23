import { Badge } from '@chakra-ui/react';

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  const color = criticScore >= 75 ? 'green' : criticScore >= 50 ? 'yellow' : 'red';

  return (
    <Badge
      borderRadius='4px'
      paddingY={'2px'}
      variant='outline'
      colorScheme={color}
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
