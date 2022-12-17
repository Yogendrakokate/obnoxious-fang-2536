import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import DrawerExample from "../../Component/sidenavbar";

function Desktime() {
  return (
    <>
      <Box display="flex" w="100%">
        <Box
          w="17%"
          h="1000px"
          border="1px solid red"
          position="fixed"
          background="#333C43"
        >
          <Image
            src="https://i.ibb.co/s5Mc5s5/TESla-clock-1.jpg"
            w="40%"
            h="70px"
            m="auto"
            alt="logo"
          />
        </Box>

        <Box
          backgroundColor="#ebecec"
          w="80%"
          boxSizing="border-box"
          m="0"
          p="0"
          fontFamily="Source sans pro,sans serif"
          ml="250px"
        >
          <Box h="150px" border="1px solid red" mb="30px" background="#FFFFFF">
            <Box
              h="70px"
              border="1px solid red"
              w="100%"
              background="#4EA819"
              pb="20px"
            >
              <DrawerExample />
              <Text textAlign="center">
                Free trial 14-days{" "}
                <button
                  style={{
                    border: "2px solid #C2C5C7",
                    width: "150px",
                    background: "#FFFFFF",
                  }}
                >
                  Subscribe now
                </button>{" "}
                <button
                  style={{
                    border: "2px solid #FFFFFF",
                    width: "100px",
                    fontSize: "13px",
                    color: "#FFFFFF",
                    borderRadius: "3px",
                    height: "30px",
                  }}
                >
                  Book demo
                </button>
              </Text>
            </Box>
          </Box>

          <Box
            w="88%"
            m="auto"
            border="1px solid red"
            h="120px"
            mb="30px"
            background="#2693F8"
            color="#FFFFFF"
          >
            <Text
              textDecoration="none solid rgb(255,255,255)"
              fontWeight="bold"
              fontSize="20px"
              m="10px"
            >
              Get started with DeskTime 0%
            </Text>

            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={4}
              w="70%"
              ml="30px"
              mt="30px"
            >
              <GridItem
                w="90%"
                h="30px"
                border="1.5px solid #FFFFFF"
                _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
                borderRadius="6px"
                p="5x"
              >
                1.download app
              </GridItem>
              <GridItem
                w="90%"
                h="30px"
                border="1px solid #FFFFFF"
                _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
                borderRadius="6px"
                p="5x"
              >
                1. Download app
              </GridItem>
              <GridItem
                w="90%"
                h="30px"
                border="1px solid #FFFFFF"
                _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
                borderRadius="6px"
                p="5x"
              >
                1. Download app
              </GridItem>
              <GridItem
                w="90%"
                h="30px"
                border="1px solid #FFFFFF"
                _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
                borderRadius="6px"
                p="5x"
              >
                1. Download app
              </GridItem>
            </Grid>
          </Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} w="90%" m="auto">
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                ARRIVAL TIME
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                LEFT TIME
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                PRODUCTIVE TIME
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                DESK TIME
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                TIME AT WORK
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                PLACE IN GRP
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                EFFECTIVNESS
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
            <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
              <Text mb="62px" p="6px">
                PRODUCTIVITY
              </Text>
              <Image
                src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
                alt="shape"
                w="104%"
              />
            </GridItem>
          </Grid>

          <Box h="280px" w="85%" m="auto" mt="20px" backgroundColor="#FFFFFF">
            <Text>PRODUCTIVITY BAR</Text>
          </Box>
          <Box w="85%" m="auto" mt="20px" h="180px" background="#FFFFFF">
            <Box h="60px" background="#5FB92A"></Box>
            <Text textAlign="center" mt="20px" fontWeight="bold">
              {" "}
              No data collected
            </Text>
          </Box>
          <Box w="85%" m="auto" mt="20px" h="180px" background="#FFFFFF">
            <Box h="60px" background="#FF6600"></Box>
            <Text textAlign="center" mt="20px" fontWeight="bold">
              {" "}
              No data collected
            </Text>
          </Box>
          <Box w="85%" m="auto" mt="20px" h="180px" background="#FFFFFF">
            <Box h="60px" background="#999DA1"></Box>
            <Text textAlign="center" mt="20px" fontWeight="bold">
              {" "}
              No data collected
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

// export default Desktime
// import { Avatar, Box, Grid, GridItem, Image, Text,useDisclosure,Button,AlertDialog,AlertDialogHeader,AlertDialogContent,AlertDialogOverlay,AlertDialogCloseButton,AlertDialogFooter,AlertDialogBody } from "@chakra-ui/react";
// import React from "react";
// import DrawerExample from "../../Component/sidenavbar";
// import Timer from "./timer";

// function Desktime() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const cancelRef = React.useRef()
//   let extract = JSON.parse(localStorage.getItem("userData"));
// console.log("extract", extract);
//   return (
//     <>
//       <Box display="flex" w="100%">
//         <Box w="17%" h="1000px" position="fixed" background="#333C43">
//           <Image
//             src="https://i.ibb.co/s5Mc5s5/TESla-clock-1.jpg"
//             w="40%"
//             h="70px"
//             m="auto"
//             alt="logo"
//           />
//            <>
//       <Button onClick={onOpen} ml="80px" mt="30px">Timer</Button>
//       <AlertDialog
//         motionPreset='slideInBottom'
//         leastDestructiveRef={cancelRef}
//         onClose={onClose}
//         isOpen={isOpen}
//         isCentered
//       >
//         <AlertDialogOverlay />

//         <AlertDialogContent>
//           <AlertDialogHeader border="1px solid red" background="#4EA819" fontWeight="bold" color="#FFFFFF" fontSize="25px">Web Timer</AlertDialogHeader>
//           <AlertDialogCloseButton color="#FFFFFF"/>
//           <AlertDialogBody>
//            <Timer/>
//           </AlertDialogBody>
//           <AlertDialogFooter>
//             <Button ref={cancelRef} onClick={onClose}>
//               No
//             </Button>
//             <Button colorScheme='red' ml={3}>
//               Yes
//             </Button>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//         </Box>

//         <Box
//           backgroundColor="#ebecec"
//           w="80%"
//           boxSizing="border-box"
//           m="0"
//           p="0"
//           fontFamily="Source sans pro,sans serif"
//           ml="250px"
//         >
//           <Box
//             h="150px"
//             mb="30px"
//             background="#FFFFFF"
//             boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
//           >
//             <Box h="80px" w="100%" background="#4EA819" pb="20px" pt="20px">
//               <Text textAlign="center">
//                 Free trial 14-days{" "}
//                 <button
//                   style={{
//                     border: "2px solid #C2C5C7",
//                     width: "150px",
//                     background: "#FFFFFF",
//                   }}
//                 >
//                   Subscribe now
//                 </button>{" "}
//                 <button
//                   style={{
//                     border: "2px solid #FFFFFF",
//                     width: "100px",
//                     fontSize: "13px",
//                     color: "#FFFFFF",
//                     borderRadius: "3px",
//                     height: "30px",
//                   }}
//                 >
//                   Book demo
//                 </button>
//               </Text>
//             </Box>
//             <DrawerExample />

//             <Box
//               pb="40px"

//               w="200px"
//               ml="950px"
//               mt="-40px"
//               h="70px"
//               pt="10px"
//             >
//               {extract.map((ele) => (
//                 <>
//                   <Text pl="40px">
//                     {ele.name}{" "}
//                     <Avatar
//                       name={ele.name}
//                       color="white"
//                       background="black"
//                       mt="10px"
//                     />
//                   </Text>
//                 </>
//               ))}
//             </Box>
//           </Box>

//           <Box
//             w="88%"
//             m="auto"

//             h="120px"
//             mb="30px"
//             background="#2693F8"
//             color="#FFFFFF"
//           >
//             <Text
//               textDecoration="none solid rgb(255,255,255)"
//               fontWeight="bold"
//               fontSize="20px"
//               m="10px"
//             >
//               Get started with DeskTime 0%
//             </Text>

//             <Grid
//               templateColumns="repeat(4, 1fr)"
//               gap={4}
//               w="70%"
//               ml="30px"
//               mt="30px"
//             >
//               <GridItem
//                 w="90%"
//                 h="30px"
//                 border="1.5px solid #FFFFFF"
//                 _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
//                 borderRadius="6px"
//                 p="5x"
//               >
//                 1.download app
//               </GridItem>
//               <GridItem
//                 w="90%"
//                 h="30px"
//                 border="1px solid #FFFFFF"
//                 _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
//                 borderRadius="6px"
//                 p="5x"
//               >
//                 1. Download app
//               </GridItem>
//               <GridItem
//                 w="90%"
//                 h="30px"
//                 border="1px solid #FFFFFF"
//                 _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
//                 borderRadius="6px"
//                 p="5x"
//               >
//                 1. Download app
//               </GridItem>
//               <GridItem
//                 w="90%"
//                 h="30px"
//                 border="1px solid #FFFFFF"
//                 _hover={{ backgroundColor: "#FFFFFF", color: "#2693F8" }}
//                 borderRadius="6px"
//                 p="5x"
//               >
//                 1. Download app
//               </GridItem>
//             </Grid>
//           </Box>
//           <Grid templateColumns="repeat(4, 1fr)" gap={4} w="90%" m="auto">
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 ARRIVAL TIME
//               </Text>

//               <Image
//                 src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 LEFT TIME
//               </Text>
//               <Image
//                 src="https://desktime.com/static/app/employee/employee-empty-arrival-time.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 PRODUCTIVE TIME
//               </Text>
//               <Image
//                 src="https://desktime.com/static/app/employee/employee-empty-productive-time.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 DESK TIME
//               </Text>
//               <Image
//                 src="	https://desktime.com/static/app/employee/employee-empty-desktime-time.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 TIME AT WORK
//               </Text>
//               <Image
//                 src="	https://desktime.com/static/app/employee/employee-empty-offline-time.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 PLACE IN GRP
//               </Text>
//               <Image
//                 src="https://desktime.com/static/app/employee/employee-empty-productive-time.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 EFFECTIVNESS
//               </Text>
//               <Image
//                 src="https://desktime.com/static/app/employee/employee-empty-effectiveness.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//             <GridItem w="90%" h="150" backgroundColor="#FFFFFF">
//               <Text mb="62px" p="6px">
//                 PRODUCTIVITY
//               </Text>
//               <Image
//                 src="	https://desktime.com/static/app/employee/employee-empty-productivity.svg"
//                 alt="shape"
//                 w="104%"
//               />
//             </GridItem>
//           </Grid>

//           <Box h="280px" w="85%" m="auto" mt="20px" backgroundColor="#FFFFFF">
//             <Text>PRODUCTIVITY BAR</Text>
//           </Box>
//           <Box w="85%" m="auto" mt="20px" h="180px" background="#FFFFFF">
//             <Box h="60px" background="#5FB92A"></Box>
//             <Text textAlign="center" mt="20px" fontWeight="bold">
//               {" "}
//               No data collected
//             </Text>
//           </Box>
//           <Box w="85%" m="auto" mt="20px" h="180px" background="#FFFFFF">
//             <Box h="60px" background="#FF6600"></Box>
//             <Text textAlign="center" mt="20px" fontWeight="bold">
//               {" "}
//               No data collected
//             </Text>
//           </Box>
//           <Box w="85%" m="auto" mt="20px" h="180px" background="#FFFFFF">
//             <Box h="60px" background="#999DA1"></Box>
//             <Text textAlign="center" mt="20px" fontWeight="bold">
//               {" "}
//               No data collected
//             </Text>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

export default Desktime;
