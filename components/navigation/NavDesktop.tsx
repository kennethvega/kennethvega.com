import React, { useRef } from "react";
import { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Overlay from "./../utility/Overlay";
import Link from "next/link";
import { useModalContext } from "../../context/ModalContext";
import Tippy from "@tippyjs/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const NavDesktop = () => {
  const { setOpenModal } = useModalContext();
  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
    setIsOpen(false);
  };
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        scrollPosition > 100 ? "shadow" : "shadow-none",
        `sticky top-0 bg-white z-50 w-full xmd:px-5 sm:px-0 `
      )}
    >
      <header
        className={`flex max-w-[62rem] px-5 sm:px-3 h-16 mx-auto justify-between items-center __className_f6433a`}
      >
        <h1 className="font-bold cursor-pointer rounded-md">
          <Link href="/" aria-label="logo">
            KENNETH VEGA
          </Link>
        </h1>
        <nav>
          <ul
            id="primary-navigation"
            className={`flex justify-center items-center gap-5 text-sm`}
          >
            <li onClick={() => setIsOpen(false)}>
              <Link href="/#projects" aria-label="kenneth vega projects">
                Projects
              </Link>
            </li>

            <li onClick={() => setIsOpen(false)}>
              <Link href="/#about" aria-label="kenneth vega about">
                About
              </Link>
            </li>

            <li
              onClick={handleModal}
              className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              Contact
            </li>
            <li>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-d50af.appspot.com/o/Kenneth%20Vega%20Resume%20(5).pdf?alt=media&token=52e4adca-dc6c-44c2-ae57-777c956adc15"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center gap-2 items-center"
              >
                Resume <TbExternalLink />
              </a>
            </li>

            <div className="hidden md:flex gap-8 text-3xl ">
              <Tippy content="Github profile">
                <a
                  href="https://github.com/kennethvega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="github link"
                >
                  <AiFillGithub />
                </a>
              </Tippy>
              <Tippy content="Linkedin profile">
                <a
                  href="https://www.linkedin.com/in/kenneth-vega-5bb9b3237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="linkedin link"
                >
                  <AiFillLinkedin />
                </a>
              </Tippy>
            </div>
          </ul>
        </nav>
        {isOpen && <Overlay handleClose={() => setIsOpen(false)} />}
      </header>
    </div>
  );
};

export default NavDesktop;
