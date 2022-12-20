import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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

  const modalContent = (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
      <div
        data-aos="zoom-in"
        className="relative w-auto my-6 mx-auto max-w-3xl xsm:mx-0 bg-white z-50 p-10 xsm:p-2 rounded"
      >
        <p
          className="cursor-pointer text-4xl absolute top-2 right-6"
          onClick={handleClose}
        >
          &times;
        </p>
        <div>{children}</div>
      </div>

      <Overlay handleClose={handleClose} />
    </div>
  );

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
