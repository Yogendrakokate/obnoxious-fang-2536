<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Features from "../Pages/Features";
import AboutUs from "../Pages/AboutUs";
import Demo from "../Pages/Demo";
import Pricing from "../Pages/Pricing";
import FAQ from "../Pages/FAQ";
import Blog from "../Pages/Blog";
=======
import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from "../Pages/HomePage"
import AddProject from "../Pages/Projects/AddProject"
import Login from "../Pages/jeevan/Login"
import Signup from "../Pages/jeevan/Signup"
import Information from "../Pages/jeevan/Information"
import Usefor from "../Pages/jeevan/Usefor"
import Desktime from "../Pages/jeevan/Desktime"

// import Information from "../Pages/jeevan/Information";
// import Usefor from "../Pages/jeevan/Usefor";
// import Desktime from "../Pages/jeevan/Desktime";




>>>>>>> be29f4a9150c0772f4147588232201d765370f01
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
<<<<<<< HEAD
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
=======
        <Route path="/AddProject" element={<AddProject />}></Route>
        <Route path="/Information" element={<Information />}></Route>
        <Route path="/Usefor" element={<Usefor />}></Route>
        <Route path="/Desktime/:id" element={<Desktime />}></Route>
>>>>>>> be29f4a9150c0772f4147588232201d765370f01
      </Routes>
    </div>
  );
};

export default MainRoutes;
