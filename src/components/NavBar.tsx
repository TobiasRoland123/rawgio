import React from 'react';
import logo from '../assets/logo.webp';
import { HStack, Image, Text } from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Image
        src={logo}
        alt='logo'
        boxSize={'60px'}
      />
      <Text> Navbar</Text>
      <div> 💩💩💩💩💩</div>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
