import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Notfound from "../pages/Notfound/Notfound";
import SignUp from "../pages/SignUp/SignUp";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp/>}/>
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default Approutes;
