import React from "react"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Stack,
    Text,
    Image,
    Radio,
    RadioGroup,
} from '@chakra-ui/react'


function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>  <Text>Time Tesla</Text></DrawerHeader>
  
            <DrawerBody>
                        <Text>Dashboard</Text>
                        <Text>MyDeskTime</Text>
                        <Text>Team Member</Text>
                        <Text> Colleagues</Text>
                        <Text>Projects</Text>
                        <Text>Work Schedules</Text>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
export default DrawerExample

  

