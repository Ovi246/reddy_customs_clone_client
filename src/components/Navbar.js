import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const user = useContext(AuthContext);

  return (
    <div className="bg-[#323232]">
      <div className="container flex justify-between pt-5 items-center pb-2 absolute sticky top-0">
        <Link to="/">
          <img
            src={logo}
            alt=""
            width="200px"
            height="80px"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="flex gap-5">
            <Link to="/">
              <li className="hover:bg-mygold p-2 rounded-full">Home</li>
            </Link>
            {!user ? (
              <>
                <Link to="/login">
                  <li className="hover:bg-mygold p-2 rounded-full">Login</li>
                </Link>
                <Link to="/register">
                  <li className="hover:bg-mygold p-2 rounded-full">Register</li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/myreviews">
                  <li className="hover:bg-mygold p-2 rounded-full">
                    My Reviews
                  </li>
                </Link>
                <Link to="/myservices">
                  <li className="hover:bg-mygold p-2 rounded-full">
                    My Services
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
