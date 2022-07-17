import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProvider {
  children: ReactNode;
}

type ModalContextData = {
  isNewTaskModalOpen: boolean;
  isUpdateTaskModalOpen: boolean;
  handleOpenNewTaskModal: () => void;
  handleOpenUpdateTaskModal: () => void;
  handleCloseModal: () => void;
};

const ModalContext = createContext({} as ModalContextData);

export function ModalContextProvider({ children }: ModalProvider) {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isUpdateTaskModalOpen, setIsUpdateTaskModalOpen] = useState(false)

  function handleOpenNewTaskModal() {
    document.body.style.overflow = !isUpdateTaskModalOpen ? "hidden" : "initial"

    setIsNewTaskModalOpen(!isNewTaskModalOpen);
  }

  function handleOpenUpdateTaskModal() {
    document.body.style.overflow = !isNewTaskModalOpen ? "hidden" : "initial"

    setIsUpdateTaskModalOpen(!isUpdateTaskModalOpen);
  }

  function handleCloseModal() {
    document.body.style.overflow = "initial"

    setIsNewTaskModalOpen(false);
    setIsUpdateTaskModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        handleOpenNewTaskModal,
        handleOpenUpdateTaskModal,
        isNewTaskModalOpen,
        isUpdateTaskModalOpen,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
