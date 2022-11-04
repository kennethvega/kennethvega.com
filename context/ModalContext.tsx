import { createContext, useContext, useState } from "react";

interface ContextInterface {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}
const Context = createContext({} as ContextInterface);

export const ModalContext = ({ children }: any) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useModalContext = () => useContext(Context);
