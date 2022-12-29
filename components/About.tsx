import Image from "next/image";
import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="grid grid-cols-2 mt-10 md:grid-cols-1 md:gap-10 __className_f6433a">
      <div className="text-base">
        <p>
          Hi! I’m Kenneth Vega. I have a{" "}
          <strong>
            passion for designing, learning, and building things for the web
          </strong>
          . I like to solve design problems, create interactive interfaces, and
          <strong> develop web experiences and web applications</strong>.
        </p>
        <div className="my-3">
          Here are the technologies I’ve been working with.
        </div>
        <Skills />
      </div>
      <div className="mx-auto">
        <Image
          src="/profile.png"
          width={200}
          height={200}
          alt="Kenneth's profile picture"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
