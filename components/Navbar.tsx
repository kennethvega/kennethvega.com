import React from "react";
import Container from "./utility/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="h-16 flex items-center justify-between bg-white bg-opacity-60 backdrop-blur-md z-50">
        <h1 className="px-2 font-bold text-lg cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300">
          Kenneth Vega
        </h1>
        <ul className="flex gap-6">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
