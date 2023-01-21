import { ReactNode } from 'react';
import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Divider,
 HStack,
  Input,
  InputGroup,
  InputRightAddon,
 Dropdown,
 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,SearchIcon,ChevronDownIcon} from '@chakra-ui/icons';

import Mainlandingpage from './Mainlandingpage';
import logoauiker from "../images/logoauiker.jpg"
import ModalSignup from '../landingpages/ModalSignup';


// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Box bg={useColorModeValue('white.100', 'gray.900')} px={4}>
        <Flex h={16} pl="190px" w={1090} alignItems={'center'} justifyContent={'space-around'}>
          <Box>
      <img  width="110px"  src={logoauiker}/>

          </Box>
          <Box>
            <InputGroup>
          <Input placeholder='Search in All india' height="40px" width="400px" HiOutlineSearch  />
          <InputRightAddon  pointerEvents="" bg={"blue.300"}  children={<SearchIcon color="white.300"/>} />
          </InputGroup>
          </Box>
          <Box pl="30px">
       
            
            <ModalSignup/>
            

          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={5}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider   border={"1px solid grey"} orientation='horizontal' />


      {/* ******************************MENU**************** */}

  <HStack  pt={"10px"} pl="200px" w={1090} alignItems={'center'} justifyContent={'space-around'}>
      <Menu >
  <MenuButton 
 
    style={{ width: '166px' }} >
 
    <Text  fontSize='13px'>MOBILES<ChevronDownIcon /></Text>
   
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
  </Menu>
  <Menu >
  <MenuButton 
 
 style={{ width: '166px' }} >
<Text fontSize='13px'> FURNITURE & DECOR <ChevronDownIcon /></Text>


</MenuButton>
<MenuList>
 <MenuItem>Download</MenuItem>
 <MenuItem>Create a Copy</MenuItem>
 <MenuItem>Mark as Draft</MenuItem>
 <MenuItem>Delete</MenuItem>
 <MenuItem>Attend a Workshop</MenuItem>
</MenuList>
</Menu>

<Menu>

<MenuButton 
 
 style={{ width: '166px' }} >


 <Text fontSize='13px'> ELECTRONICS <ChevronDownIcon /></Text>

</MenuButton>
<MenuList>
 <MenuItem>Download</MenuItem>
 <MenuItem>Create a Copy</MenuItem>
 <MenuItem>Mark as Draft</MenuItem>
 <MenuItem>Delete</MenuItem>
 <MenuItem>Attend a Workshop</MenuItem>
</MenuList>
</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


 <Text fontSize='13px'> HOME APPLIANCES <ChevronDownIcon /></Text>

</MenuButton>
<MenuList>
 <MenuItem>Download</MenuItem>
 <MenuItem>Create a Copy</MenuItem>
 <MenuItem>Mark as Draft</MenuItem>
 <MenuItem>Delete</MenuItem>
 <MenuItem>Attend a Workshop</MenuItem>
</MenuList>
</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


<Text fontSize='13px'>KIDS & TOYS  <ChevronDownIcon /></Text>
</MenuButton>
<MenuList>
 <MenuItem>Download</MenuItem>
 <MenuItem>Create a Copy</MenuItem>
 <MenuItem>Mark as Draft</MenuItem>
 <MenuItem>Delete</MenuItem>
 <MenuItem>Attend a Workshop</MenuItem>
</MenuList>
</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


<Text fontSize='13px'>SPORTS & FASHION <ChevronDownIcon /></Text>

</MenuButton>
<MenuList>
 <MenuItem>Download</MenuItem>
 <MenuItem>Create a Copy</MenuItem>
 <MenuItem>Mark as Draft</MenuItem>
 <MenuItem>Delete</MenuItem>
 <MenuItem>Attend a Workshop</MenuItem>
</MenuList>
</Menu>


  

      




</HStack>
<Divider  pt={"10px"} color={"grey"} orientation='horizontal' />



{/* ************************************landing page************ */}


<Mainlandingpage/>
    </>

  );
}