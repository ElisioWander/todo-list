import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Alert } from "../Alert";

interface TaskProps {
  task: string;
  handleDeleteTask: (task: string) => void;
}

export function Task({ task, handleDeleteTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);

  return (
    <>
      <li className="w-full py-3 px-6 flex items-center relative justify-between hover:brightness-90 transition-all text-zinc-500 dark:text-zinc-200 shadow-sm rounded-full mb-4 bg-white dark:bg-zinc-800 animate-goTop ">
        <FaTrashAlt
          fontSize={15}
          className="cursor-pointer hover:brightness-75 transition-all"
          onClick={() => setActiveAlert(true)}
        />
        <span
          className={`${
            !isChecked
              ? "cursor-default hover:brightness-75 transition-all"
              : "line-through text-zinc-300 dark:text-zinc-600 "
          }`}
        >
          {task}
        </span>
        <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
      </li>

      <Alert
        activeAlert={activeAlert}
        handleDeleteTask={handleDeleteTask}
        task={task}
        setActiveAlert={setActiveAlert}
      />
    </>
  );
}
