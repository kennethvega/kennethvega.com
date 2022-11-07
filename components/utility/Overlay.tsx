import React from "react";
import { motion } from "framer-motion";
type OutlineProps = {
  handleClose?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Overlay = ({ handleClose }: OutlineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 0.5 }}
      onClick={handleClose}
      className="layout fixed inset-0 z-10 bg-black top-0 left-0 w-[100vw] h-[100vh]"
    ></motion.div>
  );
};

export default Overlay;
