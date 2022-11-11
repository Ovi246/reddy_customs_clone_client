import React from "react";
import ServicesCard from "../components/ServicesCard";
import About from "./About";

const Services = () => {
  return (
    <>
      <About />
      <div className="mb-30">
        <h1 className="text-4xl text-center font-semibold tracking-custom mb-20">
          Our <span className="text-mygold">Services</span>
        </h1>
        <ServicesCard />
      </div>
    </>
  );
};

export default Services;
