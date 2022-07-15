import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProvider {
  children: ReactNode;
}

type ModalContextData = {
  isNewTaskModalOpen: boolean;
  handleOpenNewTaskModal: () => void;
  handleCloseModal: () => void;
};

const ModalContext = createContext({} as ModalContextData);

export function ModalContextProvider({ children }: ModalProvider) {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(!isNewTaskModalOpen);
  }

  function handleCloseModal() {
    setIsNewTaskModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        handleOpenNewTaskModal,
        isNewTaskModalOpen,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
