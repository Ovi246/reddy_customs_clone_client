import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ px, py, text, type }) => {
  return (
    <div className="flex justify-end items-center">
      <button
        className={`px-${px} py-${py} bg-[#c5a47e] hover:bg-gray-800 transition-all ease-in-out rounded-full text-lg`}
        type={type}
      >
        {text} <AiOutlineArrowRight className="inline ml-2" />
      </button>
    </div>
  );
};

export default Button;
