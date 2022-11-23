import Image from "next/image";
import React from "react";
import profile from "../asset/profile.png";
import Skills from "./Skills";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-2 mt-10 md:grid-cols-1 md:gap-10"
    >
      <div className="text-base">
        <p>
          Hi! I’m Kenneth Vega. I have a{" "}
          <strong>
            passion in designing, learning and building things for the web
          </strong>
          . I like to solve design problems, create interactive interfaces,{" "}
          <strong>develop web experiences and web applications</strong>.
        </p>
        <div className="my-3">
          Here are the technologies I’ve been working with.
        </div>
        <Skills />
      </div>
      <div className="mx-auto">
        <Image
          src={profile}
          width={200}
          height={200}
          alt="Kenneth's profile picture"
          className="rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default About;
