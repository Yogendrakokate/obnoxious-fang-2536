import React from "react"
import { TfiAlignJustify } from "react-icons/tfi";
import "./Teslatime.jpg"

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
    Box,
    Input,
    Stack,
    Text,
    Image,
    Radio,
    RadioGroup,
    HStack,
    Flex,
    Spacer,
    
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FcBarChart ,FcSelfServiceKiosk,FcBusinessman,FcCustomerSupport,FcSurvey,FcWorkflow,FcCalendar,FcMoneyTransfer,FcExport,FcNews,FcApproval} from "react-icons/fc";
import { Link } from "react-router-dom";
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
        <>
           
        <Button ref={btnRef} colorScheme='white' onClick={onOpen} >
           <Icon as={TfiAlignJustify} color='black' />
        </Button>
            <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent  bg='Black' className="drawer">
            <DrawerCloseButton />
                    <DrawerHeader>
                        <HStack>
                        <Image
                                boxSize='80px'
                                borderRadius="50%"
    objectFit='cover'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
  />
                            <Text color='white' fontSize='3xl'>Time Tesla</Text></HStack>
                        </DrawerHeader>
  
                    <DrawerBody>
                        <Link to="/Desktime/:id"><HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcBarChart} /></Box> <Box><Text fontSize='lg' color='white'>Dashboard</Text></Box></HStack></Link>
                        
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcSelfServiceKiosk} /></Box> <Box><Text fontSize='lg' color='white'>My DeskTime</Text></Box></HStack>
                        <Link to="/EmployeePage"><HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcBusinessman} /></Box> <Box><Text fontSize='lg' color='white'>Team Members</Text></Box></HStack></Link>
                        
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcCustomerSupport} /></Box> <Box><Text fontSize='lg' color='white'>Colleagues</Text></Box></HStack>
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcSurvey} /></Box> <Box><Text fontSize='lg' color='white'>Projects</Text></Box></HStack>
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcWorkflow} /></Box> <Box><Text fontSize='lg' color='white'>Work Schedules</Text></Box></HStack>
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcApproval} /></Box> <Box><Text fontSize='lg' color='white'>Booking</Text></Box></HStack>
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcCalendar} /></Box> <Box><Text fontSize='lg' color='white'>Absence Calendar</Text></Box></HStack>
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcNews} /></Box> <Box><Text fontSize='lg' color='white'>Reports</Text></Box></HStack>
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcExport} /></Box> <Box><Text fontSize='lg' color='white'>Exports</Text></Box></HStack>
                        <HStack className="dashboard" w='250px' h='10' spacing='14px' borderRadius="1px solid black"><Box><Icon w={10} h={7} as={FcMoneyTransfer} /></Box> <Box><Text fontSize='lg' color='white'>Billing</Text></Box></HStack>
                        
            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
export default DrawerExample

  

