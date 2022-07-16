import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useModalContext } from "../../Context/ModalContex";
import { Alert } from "../Alert";

interface TaskProps {
  task: {
    id: number;
    name: string;
  };
  handleDeleteTask: (taskId: number) => void;
  handleGetSelectedTask: (taskName: string, taskId: number) => void;
}

export function Task({ task, handleDeleteTask, handleGetSelectedTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);

  const { handleOpenUpdateTaskModal } = useModalContext()

  return (
    <>
      <li 
        onClick={() => handleGetSelectedTask(task.name, task.id)}
        className="w-full py-3 px-6 flex items-center relative justify-between hover:brightness-90 transition-all duration-500 text-zinc-500 dark:text-zinc-200 shadow-sm rounded-full mb-4 bg-white dark:bg-zinc-800 animate-goTop ">
        <FaTrashAlt
          fontSize={15}
          className="cursor-pointer hover:brightness-75 transition-all"
          onClick={() => setActiveAlert(true)}
        />
        <span
          onClick={handleOpenUpdateTaskModal}
          className={`${
            !isChecked
              ? "cursor-pointer hover:brightness-75 transition-all  "
              : "line-through text-zinc-300 dark:text-zinc-600 "
          }`}
        >
          {task.name}
        </span>
        <input 
          type="checkbox" 
          onClick={() => setIsChecked(true)}
          checked={isChecked && task === task}
          readOnly
          />
      </li>

      <Alert
        activeAlert={activeAlert}
        handleDeleteTask={handleDeleteTask}
        taskId={task.id}
        setActiveAlert={setActiveAlert}
      />
    </>
  );
}
