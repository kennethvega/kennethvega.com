import Link from "next/link";
import React from "react";
import { useModalContext } from "../context/ModalContext";
const Navbar = () => {
  const { openModal, setOpenModal } = useModalContext();
  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };
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
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li onClick={handleModal}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
