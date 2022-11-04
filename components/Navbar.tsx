import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 max-w-[62rem] mx-auto px-4 flex items-center justify-between ">
      <Link href="/">
        <h1 className="px-2 font-bold text-lg cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300">
          KENNETH VEGA
        </h1>
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
