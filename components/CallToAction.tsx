import React from "react";
import Button from "./utility/Button";
import { SiMinutemailer } from "react-icons/si";
const CallToAction = () => {
  return (
    <>
      <h2 className="mt-24 text-6xl font-bold text-center">
        Say hi to Kenneth.
      </h2>
      <p className="text-center mt-3">
        I would love to hear from you. Whether it’s a project, job opportunity,{" "}
        <br /> or just a chat. Feel free to contact me.
      </p>
      <p className="text-center">&darr;</p>
      <div className="flex items-center justify-center mt-10">
        <Button>
          Email <SiMinutemailer />
        </Button>
      </div>
    </>
  );
};

export default CallToAction;
