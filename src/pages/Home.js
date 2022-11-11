import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slideshow from "./../components/Slideshow";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <div className="w-32 flex flex-col items-center justify-between">
          <h1 className="-rotate-90 text-[5.75em] mt-36 opacity-5 leading-none font-bold whitespace-nowrap tracking-wider">
            REDDY
          </h1>
          <hr className="my-4 mx-auto w-16 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
          <div>
            <ul>
              <li>fb</li>
              <li>fb</li>
              <li>fb</li>
              <li>fb</li>
              <li>fb</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <Slideshow>
            <Outlet />
          </Slideshow>
        </div>
      </div>
      <div className="mt-28">
        <div className="container mx-auto border-l-2 border-mygray border-r-2">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
