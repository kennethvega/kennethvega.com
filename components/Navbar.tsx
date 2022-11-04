import Link from "next/link";
import React from "react";
import { useModalContext } from "../context/ModalContext";
import { motion } from "framer-motion";
const Navbar = () => {
  const { setOpenModal } = useModalContext();
  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="h-16 max-w-[62rem] mx-auto px-4 flex items-center justify-between ">
      <Link href="/">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          className="px-2 font-bold text-lg cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          KENNETH VEGA
        </motion.h1>
      </Link>
      <ul className="flex gap-6">
        <motion.li
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href="/#projects">Projects</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Link href="/#about">About</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          onClick={handleModal}
        >
          Contact
        </motion.li>
      </ul>
    </div>
  );
};

export default Navbar;
