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
    setIsNewTaskModalOpen(!isNewTaskModalOpen);
  }

  function handleOpenUpdateTaskModal() {
    setIsUpdateTaskModalOpen(!isUpdateTaskModalOpen);
  }

  function handleCloseModal() {
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
