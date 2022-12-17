import React from "react"
import { Button,Text } from "@chakra-ui/react"
import "./single.Module.css"
import { useDispatch } from "react-redux"
import { deletname, getname } from "../Redux/AppReducer/action"
import { useReducer } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"





const Membercart = ({ name, email, id,team ,arrival}) => {
    const [arrive, setarrive] = useState("false")
    
    const dispatch = useDispatch()
   
    const getcurtime = () => {
         setarrive(true)
      
    }
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
  
    const deletmember = (id) => {
        dispatch(deletname(id)).then(()=>dispatch(getname()))
    }
    return (
        <>
                
            <td>
                <Link to={`/Desktime/${id}`}><h5 className="h5name">{name}</h5></Link> 
                <p className="pemail">{email}</p>
            </td>
            <td className="actmem">Active</td>
          
            <td><Button  >{ arrival}</Button></td>
            <td><Button>{Number(arrival)+9}</Button></td> 
            <td className="actmem">09:HRS</td>
            <td><Text className="teamname">{team}</Text></td>
            <td><Button onClick={() => deletmember(id)}>Delet</Button></td> 
                
        </>
    )
}

export default Membercart