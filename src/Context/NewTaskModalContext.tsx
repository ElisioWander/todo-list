import { createContext, ReactNode, useContext, useState } from "react";

interface NewTaskModalProvider {
  children: ReactNode;
}

type NewTaskModalContextData = {
  toggleModal: boolean;
  handleToggleModal: () => void;
  handleCloseModal: () => void;
}

const NewTaskModalContext = createContext({} as NewTaskModalContextData)

export function NewTaskModalProvider({ children }: NewTaskModalProvider) {
  const [toggleModal, setToggleModal] = useState(false)

  function handleToggleModal() {
    setToggleModal(!toggleModal)
  }
  
  function handleCloseModal() {
    setToggleModal(false)
  }

  return (
    <NewTaskModalContext.Provider value={{ handleToggleModal, toggleModal, handleCloseModal }} >
      {children}
    </NewTaskModalContext.Provider>
  )
}

export const useNewTaskModal = () => useContext(NewTaskModalContext)