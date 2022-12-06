
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import Button from "./utility/Button";
import Tippy from "@tippyjs/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  // Built by Kenneth Vega
  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div className="-mt-16 md:-mt-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-6xl md:text-5xl sm:text-3xl"
          >
            <strong>Hello, I’m Kenneth.</strong>
          </motion.h2>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-[2rem] md:text-2xl sm:text-lg"
          >
            I am a front-end software engineer, currently focused on building
            beautiful web interfaces and web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <span className="text-3xl flex gap-10 mt-10 ">
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
            <div className="mt-16 flex gap-10 sm:gap-5 xsm:gap-3">
              <Link href="/#projects">
                <Button>Look at my work &#8595;</Button>
              </Link>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-d50af.appspot.com/o/Kenneth%20Vega%20Resume%20(5).pdf?alt=media&token=52e4adca-dc6c-44c2-ae57-777c956adc15"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  View resume <TbExternalLink />
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="scroll-down"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
