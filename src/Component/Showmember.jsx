import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getname } from "../Redux/AppReducer/action"

import Membercart from "./membercart"

const Showmember = () => {
    const dispatch = useDispatch()
    const dataname = useSelector((store) => store.AppReducer.name)
    
    useEffect(() => {
        if (dataname.length == 0) {
            dispatch(getname())
        }
    },[dataname.length,dispatch,])
   
    console.log(dataname)
    return (
        <>
            <div className="memtable">
            <table>
                <tr>
                <td className="memname">Name</td>
                    <td className="memname">Status</td>
                   
                    <td className="memname">Arrive at</td>
                        <td className="memname">Left at</td>
                        <td className="memname">Desk Time</td>
                        <td className="memname">Active team</td>
                        <td className="memname">Remove</td>
                </tr>
                {dataname.length > 0 && dataname.map((item) => (
               
                
                    <tr><Membercart id={item.id} name={item.name} email={item.email} team={item.team} /> </tr>
       )
          
           )}
          
           
                </table>
                </div>
        </>
)
}

export default Showmember