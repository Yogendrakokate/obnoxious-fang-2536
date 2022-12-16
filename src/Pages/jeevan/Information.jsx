
import React,{useState} from 'react'
import { Box,Input,Select,Text,InputGroup,InputLeftAddon, Button } from '@chakra-ui/react'
import { Form, Navigate } from 'react-router-dom'

function Information() {
    const [org,setOrg]=useState("")
    const [team,setTeam]=useState("")
    const [work,setWork]=useState("")
    const [num,setNum]=useState("")
    const [countinue,setCountinue]=useState(false)
    const handleOrg=(e)=>{
        setOrg(e.target.value)

    }
    const handleTeam=(e)=>{
        setTeam(e.target.value)

    }
    const handleWork=(e)=>{
        setWork(e.target.value)

    }
    const handleNum=(e)=>{
        setNum(e.target.value)

    }
    const handleCountinue=()=>{
        if(org && team && work && num){
            
            setCountinue(true)
        }

    }
    if(countinue){
        return <Navigate to="/Usefor"/>
    }
  return (
    <Box backgroundColor="#FCFCFD" w="100%" h="100%">
    <Box w="500px" h="620px" m="auto" border="1px solid red">
        <Text textAlign="center" color="#333c43" fontWeight="extrabold" fontSize="20px" fontFamily="Source sans pro,sans serif">Tell us about your team</Text>
        <Text p="10px">Help us get to know you better for an even more seamless DeskTime experience. You can later update this information in your account settings.</Text>
        
        <label style={{color:"#70777b",fontSize:".875rem",fontWeight:"600"}}>What's the name of your organization?</label>
        <Input w="100%"  mb="20px" border="1px solid #999da1" onChange={handleOrg}
        backgroundColor="#FFFFFF" placeholder='Please enter the name of your organisation'/>
        <label style={{color:"#70777b",fontSize:".875rem",fontWeight:"600"}}>How many team members will use DeskTime?
*
</label>
        <Select mb="20px" backgroundColor="#FFFFFF" border="1px solid #999da1" onChange={handleTeam}>
        <option value='option1'>Choose team member count</option>
  <option value='option2'>i'm a Freelancer  </option>
  <option value='option3'>2-5</option>
  <option value='option3'>6-10</option>
  <option value='option4'>11-20</option>
  <option value='option5'>21-50</option>
  <option value='option6'>50-100</option>
        </Select>
        <label style={{color:"#70777b",fontSize:".875rem",fontWeight:"600"}}>What industry do you work in?
*</label>
        <Select mb="20px" backgroundColor="#FFFFFF" border="1px solid #999da1" onChange={handleWork}>
        <option value='option1'>Select your industry</option>
  <option value='option2'>Arts</option>
  <option value='option3'>Educational</option>
  <option value='option3'>Finantial service</option>
  <option value='option4'>Government</option>
  <option value='option5'>Healthcare</option>
  <option value='option6'>Media</option>
  <option value='option6'>Sofware Development</option>
  <option value='option6'>Marketing and Adverstising</option>
  <option value='option6'>Other</option>
        </Select>
        <label style={{color:"#70777b",fontSize:".875rem",fontWeight:"600"}}>What's your phone number?
</label>
<InputGroup>
    <InputLeftAddon children='+91' />
    <Input  type="tel" mb="10px" placeholder='phone number' backgroundColor="#FFFFFF" border="1px solid #999da1" onChange={handleNum} />
  </InputGroup>
  <Button backgroundColor="#70777b" color="#FFFFFF" ml="350px" mt="20px" onClick={handleCountinue}>countinue</Button>
  

    </Box>
    </Box>
  )
}

export default Information