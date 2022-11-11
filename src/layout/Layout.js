import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
