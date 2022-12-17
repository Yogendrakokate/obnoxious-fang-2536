import React from "react";
import { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Addname, getname } from "../Redux/AppReducer/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
  Input,
  Select,
  Text
} from '@chakra-ui/react'
const initialname = {
 name: "",
  email: "",
 team:"-",
};

const addfun = (state, action) => {
 switch (action.type) {
  case "name":
   return { ...state, name: action.payload };
  case "email":
     return { ...state, email: action.payload };
   case "team":return{...state,team:action.payload}
  default:
   return state;
 }
};



export function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const dispatch = useDispatch();

 const [Addme, setAddme] = useReducer(addfun, initialname);

 const AddM = () => {
  if (JSON.stringify(Addme) !== JSON.stringify(initialname)) {
    dispatch(Addname(Addme)).then(() => {
     dispatch(getname())
   })
  }
 };


  return (
    <>
      
      <Button mt={4} onClick={onOpen} colorScheme='green' className="atm">
      Add Team Member
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add team members to track their productivity</ModalHeader>
          <Text>Creating teams keeps you organized. Add new teams in Settings ⟶ Teams</Text>
          <Input value={Addme.name} placeholder="Full Name" onChange={(e) => setAddme({ type: "name", payload: e.target.value })} />
          <Input value={Addme.email} placeholder="Email" onChange={(e) => setAddme({ type: "email", payload: e.target.value })} />
          <Select placeholder='Select option' value={Addme.team} onChange={(e)=>setAddme({type:"team",payload:e.target.value})}>
  <option value='Team 1'>Team 1</option>
  <option value='Team 2'>Team 2</option>
  <option value='Team 3'>Team 3</option>
</Select>
          
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={AddM}>
              Submit
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


