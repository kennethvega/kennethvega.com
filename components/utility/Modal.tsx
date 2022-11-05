import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Overlay from "./Overlay";

type ModalProps = {
  openModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ openModal, onClose, children }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
    document.body.style.overflow = "unset";
  };

  const modalContent = openModal ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          transition: {
            ease: "easeIn",
            duration: 0.3,
          },
        }}
        className="relative w-auto my-6 mx-auto max-w-3xl bg-white z-50 p-10 rounded"
      >
        <p
          className="cursor-pointer text-4xl absolute top-2 right-6"
          onClick={handleClose}
        >
          &times;
        </p>
        <div>{children}</div>
      </motion.div>

    
      <Overlay handleClose={handleClose} />
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

export default Modal;
