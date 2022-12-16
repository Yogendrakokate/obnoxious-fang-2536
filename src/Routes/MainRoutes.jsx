import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from "../Pages/HomePage"
import AddProject from "../Pages/Projects/AddProject";
import Login from "../Pages/jeevan/Login"
import Signup from "../Pages/jeevan/Signup"
import Employe from "../Pages/EmployeePage";
import SingleMember from "../Pages/Singlemem";
import Desktime from "../Pages/jeevan/Desktime";
import Usefor from "../Pages/jeevan/Usefor"
import Information from "../Pages/jeevan/Information"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/employe" element={<Employe />}></Route>
        <Route path="/employe/:id" element={<SingleMember />}></Route>
        <Route path="/AddProject" element={<AddProject />}></Route>
        <Route path="/Information" element={<Information />}></Route>
        <Route path="/Usefor" element={<Usefor />}></Route>
        <Route path="/Desktime" element={<Desktime />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes