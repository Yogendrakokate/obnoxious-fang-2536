import { Box,Grid,GridItem,Image,Text } from '@chakra-ui/react'
import React from 'react'
import DrawerExample from '../../Component/sidenavbar'

function Desktime() {
  return (
    <>
    
    <Box display="flex" w="100%">
    
    <Box w="17%" h="1000px" border="1px solid red" position="fixed" background="#333C43">
      <Image src="https://i.ibb.co/s5Mc5s5/TESla-clock-1.jpg" w="40%" h="70px" m="auto"  alt="logo"/>
    </Box>
    
    <Box backgroundColor="#ebecec" w="80%"  boxSizing="border-box" m="0" p="0"     fontFamily="Source sans pro,sans serif" ml="250px" >
     <Box h="150px" border="1px solid red" mb="30px" background="#FFFFFF">
      <Box h="70px" border="1px solid red" w="100%" background="#4EA819" pb="20px" >
      <DrawerExample/>
      <Text textAlign="center">Free trial 14-days <button style={{border:'2px solid #C2C5C7',width:"150px",background:"#FFFFFF"}}>Subscribe now</button>    <button style={{border:'2px solid #FFFFFF',width:"100px" ,fontSize:"13px", color:"#FFFFFF",borderRadius:"3px",height:"30px"}} >Book demo</button></Text>
      

      </Box>

     </Box>
   
      <Box w="88%" m="auto" border="1px solid red" h="120px" mb="30px" background="#2693F8" color="#FFFFFF" >
        <Text textDecoration="none solid rgb(255,255,255)" fontWeight="bold" fontSize="20px" m="10px">Get started with DeskTime
0%</Text>

<Grid templateColumns='repeat(4, 1fr)' gap={4} w="70%" ml="30px" mt="30px" >
  <GridItem w='90%' h='30px' border="1.5px solid #FFFFFF" _hover={{ backgroundColor:"#FFFFFF", color:"#2693F8"}} borderRadius="6px" p="5x" >
    1.download app
  </GridItem>
  <GridItem w='90%' h='30px' border="1px solid #FFFFFF" _hover={{ backgroundColor:"#FFFFFF", color:"#2693F8"}} borderRadius="6px" p="5x"   >  
  1. Download app
    
  </GridItem>
  <GridItem w='90%' h='30px' border="1px solid #FFFFFF" _hover={{ backgroundColor:"#FFFFFF", color:"#2693F8"}} borderRadius="6px" p="5x"  >  
  1. Download app 
    
  </GridItem>
  <GridItem w='90%' h='30px' border="1px solid #FFFFFF" _hover={{ backgroundColor:"#FFFFFF", color:"#2693F8"}} borderRadius="6px" p="5x"  >   
  1. Download app
    
  </GridItem>
  
  
  </Grid>

      </Box>
        <Grid templateColumns='repeat(4, 1fr)' gap={4} w="90%" m="auto">
  <GridItem w='90%' h='150'  backgroundColor="#FFFFFF"   >
    <Text mb="62px" p="6px">ARRIVAL TIME</Text>
    <Image  src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"  />
  </GridItem>
  <GridItem w='90%' h='150'   backgroundColor="#FFFFFF"  >
  <Text mb="62px" p="6px">LEFT TIME</Text>
    <Image src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"/>
  </GridItem>
  <GridItem w='90%' h='150'  backgroundColor="#FFFFFF" >
  <Text mb="62px" p="6px">PRODUCTIVE TIME</Text>
    <Image src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"/>
  </GridItem>
  <GridItem w='90%' h='150'  backgroundColor="#FFFFFF">
  <Text mb="62px" p="6px">DESK TIME</Text>
    <Image src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"/>
  </GridItem>
  <GridItem w='90%' h='150'  backgroundColor="#FFFFFF" >
  <Text mb="62px" p="6px">TIME AT WORK</Text>
    <Image src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"/>
  </GridItem>
  <GridItem w='90%' h='150'  backgroundColor="#FFFFFF">
  <Text mb="62px" p="6px">PLACE IN GRP</Text>
    <Image src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"/>
  </GridItem>
  <GridItem w='90%' h='150'   backgroundColor="#FFFFFF">
  <Text mb="62px" p="6px">EFFECTIVNESS</Text>
    <Image src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"/>
  </GridItem>
  <GridItem w='90%' h='150'   backgroundColor="#FFFFFF">
  <Text mb="62px" p="6px">PRODUCTIVITY</Text>
    <Image src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg" alt="shape" w="104%"/>
  </GridItem>
 
</Grid>

<Box h="280px"   w="85%" m="auto" mt="20px" backgroundColor="#FFFFFF">
    <Text>PRODUCTIVITY BAR</Text>

</Box>
<Box w="85%" m="auto" mt="20px"  h="180px" background="#FFFFFF">
    <Box h="60px" background="#5FB92A" ></Box>
   <Text textAlign="center" mt="20px" fontWeight="bold" > No data collected</Text>
</Box>
<Box w="85%" m="auto" mt="20px"  h="180px" background="#FFFFFF">
    <Box h="60px" background="#FF6600" ></Box>
    <Text textAlign="center" mt="20px" fontWeight="bold" > No data collected</Text>
</Box>
<Box w="85%" m="auto" mt="20px"  h="180px" background="#FFFFFF">
    <Box h="60px" background="#999DA1" ></Box>
    <Text textAlign="center" mt="20px" fontWeight="bold" > No data collected</Text>
</Box>
    </Box>
    </Box>
    </>
  )
}

export default Desktime