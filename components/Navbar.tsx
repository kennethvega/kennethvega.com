import React from "react";
import Container from "./utility/Container";

const Navbar = () => {
  return (
    <div className="h-16 max-w-[62rem] mx-auto px-4 flex items-center justify-between ">
      <h1 className="px-2 font-bold text-lg cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300">
        Kenneth Vega
      </h1>
      <ul className="flex gap-6">
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
