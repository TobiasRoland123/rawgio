import { useColorMode } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react';

export function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
      ></Switch>
    </header>
  );
}
