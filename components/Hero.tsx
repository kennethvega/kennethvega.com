import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import Button from "./utility/Button";
import Tippy from "@tippyjs/react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="h-[100vh] flex items-center">
      <div className="-mt-16">
        <div>
          <h2 className="text-[2.5rem] font-medium">
            <strong> Hello, I’m Kenneth.</strong> A front-end software developer
            focused on building beautiful web interfaces and applications.
          </h2>
          <div>
            <span className="text-3xl flex gap-10 mt-10">
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
            </span>
            <div className="mt-16 flex gap-10">
              <Link href="/#projects">
                <Button>Look at my work &#8595;</Button>
              </Link>
              <Button>
                View resume <TbExternalLink />
              </Button>
            </div>
          </div>
          <div className="scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
