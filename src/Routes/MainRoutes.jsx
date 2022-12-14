import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from "../Pages/HomePage"
import AddProject from "../Pages/Projects/AddProject";
import Login from "../Pages/jeevan/Login"
import Signup from "../Pages/jeevan/Signup"



const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/AddProject" element={<AddProject />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes