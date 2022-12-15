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
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
