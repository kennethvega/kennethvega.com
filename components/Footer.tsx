import Tippy from "@tippyjs/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="text-xl flex gap-10 mt-24 text-gray-500">
        <Tippy content="Github profile">
          <a
            href="https://github.com/kennethvega"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
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
          >
            <AiFillLinkedin />
          </a>
        </Tippy>
      </div>
      <p className="text-gray-500 text-sm">
        Built and designed by Kenneth Vega
      </p>
    </>
  );
};

export default Footer;
