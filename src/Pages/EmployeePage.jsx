import React from "react"
import Addmember, { ReturnFocus } from "./Addmember"
import Freetrial from "../Component/Freetrial"
import { Text } from "@chakra-ui/react"
import Showmember from "../Component/Showmember"
import { useSelector } from "react-redux"


const Employe = () => {
    const dataname = useSelector((store) => store.AppReducer.name)

    return (
        <>
            <div className="frontmember">
                <Freetrial />
                
            <div className="addteam">
                <div><Text className="tm">Team Members</Text></div>
                
                <div className="datemem">

                <div><input type="date" className="dateE" /> </div>
                    <div><ReturnFocus /></div> 
                    
                </div>
           
                </div>
                
                <div className="updatemem">
                    <div className="updatemem1"><p>TEAM MEMBER</p>
                        <h1>{dataname.length}</h1>
                    </div>
                    <div className="updatemem1"><p>WORKING</p>
                        <h1>{dataname.length}</h1></div>
                    <div className="updatemem2"><p>SLACKING</p>
                    <h1>0</h1>
                    </div>
                    <div className="updatemem2"><p>LATE</p>
                    <h1>0</h1>
                    </div>
                </div>
            
            <Showmember />
            </div>
           
            
        </>
    )
}

export default Employe