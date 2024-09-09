import { Grid, GridItem } from '@chakra-ui/react';
import { Show, Hide } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <Grid
      templateAreas={{
        lg: `
                  "Nav Nav"
                  "Aside main"
                  `,
        base: `
                  "Nav" 
                  "main"
                  `,
      }}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem
        pl='2'
        // bg='orange.300'
        area={'Nav'}
      >
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem
          pl='2'
          bg='pink.300'
          area={'Aside'}
        >
          Aside
        </GridItem>
      </Show>
      <GridItem
        pl='2'
        bg='green.300'
        area={'main'}
      >
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
