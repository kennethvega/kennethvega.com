import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import Button from "./utility/Button";
import Tippy from "@tippyjs/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[100vh] flex items-center">
      <div className="-mt-16">
        <div>
          <h2 className="text-[2.5rem]">
            <motion.strong
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="text-6xl"
            >
              Hello, I’m Kenneth.
            </motion.strong>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.4 }}
            >
              A front-end software developer currently focused on building
              beautiful web interfaces and applications.
            </motion.span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          >
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
          </motion.div>
          <div className="scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
