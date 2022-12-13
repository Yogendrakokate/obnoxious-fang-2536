import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from "../Pages/HomePage"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes