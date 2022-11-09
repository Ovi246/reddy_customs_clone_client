import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <div>© Reddy Customs 2022. All Rights Reserved.</div>
      <img src={logo} alt="" width="50px" height="50px" />
    </div>
  );
};

export default Footer;
