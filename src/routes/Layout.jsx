import React from "react";
import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
