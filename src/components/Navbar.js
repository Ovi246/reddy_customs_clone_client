import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10">
      <img src={logo} alt="" width="200px" height="80px" />
      <div>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
