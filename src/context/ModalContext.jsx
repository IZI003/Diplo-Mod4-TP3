import { useState, createContext, useContext } from "react";

const ModalContext = createContext();

export { ModalContext };

export const ModalProvider = ({ children }) => {

  const [IsmodalOpen, setIsmodalOpen] = useState(false);
  const toggleModal = () => setIsmodalOpen((prev) => !prev);

  return (
    <ModalContext.Provider value={{ IsmodalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export function UseModalContext() {
    return useContext(ModalContext);
}
