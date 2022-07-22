import { AiOutlinePlus } from "react-icons/ai";
import { useModalContext } from "../../Context/ModalContex";

export function NewTaskButton() {
  const { handleOpenNewTaskModal } = useModalContext();

  return (
    <button
      className="w-full fixed md:absolute bottom-10 flex items-center justify-center bg-transparent"
      data-testid="addButton"
      onClick={handleOpenNewTaskModal}
    >
      <div className="bg-blue-500 rounded-full p-3 hover:brightness-75 transition-all ">
        <AiOutlinePlus fontSize={40} className="text-white " />
      </div>
    </button>
  );
}
