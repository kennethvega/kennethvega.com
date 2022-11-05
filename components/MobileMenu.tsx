import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
type MobileMenuProps = {
  isOpen: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div
      className={` ${classNames(
        isOpen ? "open" : "",
        ` nav-menu md:hidden flex justify-center items-center fixed inset-y-0 right-0 w-[75vw] h-[100vh] bg-white z-40`
      )}    
     `}
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
  );
};

export default MobileMenu;
