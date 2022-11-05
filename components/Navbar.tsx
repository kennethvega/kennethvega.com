import Link from "next/link";
import React, { useState } from "react";
import { useModalContext } from "../context/ModalContext";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

import Overlay from "./utility/Overlay";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setOpenModal } = useModalContext();
  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="h-16 max-w-[62rem] mx-auto px-4 flex items-center justify-between relative overflow-hidden">
      <Link href="/">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          className="px-2 font-bold text-xl cursor-pointer rounded-md hover:bg-gray-200"
        >
          {/* KENNETH VEGA */}NAME
        </motion.h1>
      </Link>
      <nav className={`hidden md:flex`}>
        <ul className="flex gap-6">
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link href="/#projects">Projects</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link href="/#about">About</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            onClick={handleModal}
          >
            Contact
          </motion.li>
        </ul>
      </nav>

      {/* hamburger menu */}
      <div className="md:hidden flex z-50 ">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      {/* mobile menu*/}
      {/* <MobileMenu isOpen={isOpen} /> */}
      {/* <div>
        <div
          className={`hidden xmd:flex justify-center items-center  fixed inset-y-0 right-0 w-[75vw] h-[100vh] bg-white z-40 nav ${
            isOpen ? "nav-active" : "nav-not-active"
          }`}
        >
          <ul className="flex flex-col justify-center gap-14 text-2xl">
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li>Resume</li>
            <div className="flex justify-center gap-8">
              <span className="text-4xl">
                <AiFillGithub />
              </span>
              <span className="text-4xl">
                <AiFillLinkedin />
              </span>
            </div>
          </ul>
        </div>
      </div> */}

      <MobileMenu isOpen={isOpen} />
      {isOpen && <Overlay handleClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Navbar;
