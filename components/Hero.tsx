import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import Button from "./utility/Button";
import Tippy from "@tippyjs/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div className="-mt-16 md:-mt-20">
        <div>
          <h2 className="text-6xl md:text-5xl sm:text-3xl">
            <motion.strong
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              Hello, I’m Kenneth.
            </motion.strong>
          </h2>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="text-[2rem] md:text-2xl sm:text-lg"
          >
            A front-end software engineer, currently focused on building
            beautiful web interfaces and web applications.
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
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
                  aria-label="Github profile link"
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
                  aria-label="Linkedin profile link"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.6 }}
            className="scroll-down"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
