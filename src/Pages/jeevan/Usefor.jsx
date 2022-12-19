import { Box, Text, Grid, GridItem, Checkbox, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Usefor() {
  const [move, setMove] = useState(false);
  const handlemove = () => {
    setMove(true);
    // console.log("hhddd")
  };
  if (move) {
    return <Navigate to="/EmployeePage" />;
  }
  return (
    <Box backgroundColor="#ebece" pt="20px">
      <Box w="600px" h="400px" m="auto">
        <Text textAlign="center" fontWeight="bold" fontSize="20px">
          What will you use DeskTime for?
        </Text>
        <Text p="10px">
          Please tell us what problem you are looking to solve by using
          DeskTime. You can select more than one option. This won't affect any
          of DeskTime's functions – you can still use all of them.
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            border="1px solid #dee2e6"
            borderRadius="7px"
            pl="10px"
            w="100%"
            h="100"
          >
            <Box display="flex">
              <Checkbox />
              <Text mt="10px" color="black" fontWeight="bold">
                Desktop activity monitoring
              </Text>
            </Box>
            <Text>Manage time and productivity</Text>
          </GridItem>
          <GridItem
            border="1px solid #dee2e6"
            borderRadius="7px"
            pl="10px"
            w="100%"
            h="100"
          >
            <Box display="flex">
              <Checkbox />
              <Text mt="10px" color="black" fontWeight="bold">
                Workload management
              </Text>
            </Box>
            <Text>
              Manage employee schedules, oversee attendance, and get
              proof-of-work
            </Text>
          </GridItem>
          <GridItem
            border="1px solid #dee2e6"
            borderRadius="7px"
            pl="10px"
            w="100%"
            h="100"
          >
            <Box display="flex">
              <Checkbox />
              <Text mt="10px" color="black" fontWeight="bold">
                Billing and accounting
              </Text>
            </Box>
            <Text>
              Create detailed reports for your billing and accounting purposes
            </Text>
          </GridItem>
          <GridItem
            border="1px solid #dee2e6"
            borderRadius="7px"
            pl="10px"
            w="100%"
            h="100"
          >
            <Box display="flex">
              <Checkbox />
              <Text mt="10px" color="black" fontWeight="bold">
                Project management
              </Text>
            </Box>
            <Text>Oversee project and task progress and budgets</Text>
          </GridItem>
        </Grid>
        <Button
          backgroundColor="#70777b"
          color="#FFFFFF"
          ml="470px"
          mt="20px"
          onClick={handlemove}
        >
          countinue
        </Button>
      </Box>
    </Box>
  );
}

export default Usefor;
