import React from "react";
import Button from "./utility/Button";
import { SiMinutemailer } from "react-icons/si";
import { useModalContext } from "../context/ModalContext";
import { motion } from "framer-motion";
const CallToAction = () => {
  const { setOpenModal } = useModalContext();
  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true, amount: 1 }}
        className="mt-24 text-6xl md:text-4xl font-bold text-center"
      >
        Say hi to Kenneth.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mt-3"
      >
        I would love to hear from you. Whether it’s a project, a job
        opportunity, <br /> or just a chat. Feel free to contact me.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center arrow bounce"
      >
        &darr;
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center justify-center mt-10"
      >
        <a>
          <Button onClick={handleModal}>
            Email <SiMinutemailer />
          </Button>
        </a>
      </motion.div>
    </>
  );
};

export default CallToAction;
