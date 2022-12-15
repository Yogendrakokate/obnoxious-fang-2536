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
                    <div><DrawerExample   /></div>
                    <div><h1><input type="text" placeholder="search" /></h1></div>
                 
                    
                </div>
                <div className="navft2">
                    <div><BiMessageAltDetail size="1.8rem"/></div>
                    <div><AiTwotoneBell size="1.8rem"/></div>
                    <div><p className="navft2yk">Yogendra Kokate</p>
                    <p className="navftemail">ykokate953@gmail.com</p>
                    </div>
                    <div className="navft2img"><img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png" alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Freetrial