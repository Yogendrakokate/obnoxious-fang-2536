import React from "react"
import "./single.Module.css"

import { BiMessageAltDetail } from 'react-icons/bi';
import {AiTwotoneBell} from "react-icons/ai"
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import PlacementExample from "./sidenavbar";
import Sidenav from "./sidenavbar";
import DrawerExample from "./sidenavbar";


const Freetrial = ()=> {
    return (
        <>
            <div className="ftbtn">
                <div className="ft1">
                <h1 className="ft">Free trial active - 13 days left</h1>
                <button className="subnow"> <p>SUBSCRIBE NOW</p></button>
                <button className="bknow"> <p>BOOK A DEMO</p> </button>
                </div>
            </div>

            <div className="navft">
                <div className="navft1">
                 <DrawerExample   />
                    <h1><input type="text" placeholder="search" /></h1>
                </div>
                <div className="navft2">
                    <BiMessageAltDetail/>
                    <AiTwotoneBell/>
                    <p className="navft2yk">YK</p>
                </div>
            </div>
        </>
    )
}

export default Freetrial