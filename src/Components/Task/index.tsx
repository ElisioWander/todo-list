import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface TaskProps {
  task: string;
  onHandleDeleteTask: (task: string) => void;
}

export function Task({ onHandleDeleteTask, task }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked)

  return (
    <>
      <li className="w-full py-3 px-6 flex items-center justify-between hover:brightness-90 transition-all text-zinc-500 shadow-sm rounded-full mb-4 bg-white animate-goTop ">
        <FaTrashAlt
          fontSize={15}
          className="cursor-pointer hover:brightness-75 transition-all"
          onClick={() => onHandleDeleteTask(task)}
        />
        <span
          className={`${!isChecked ? 'cursor-pointer hover:brightness-75 transition-all' : 'line-through text-zinc-300'}`}
        >
          {task}
        </span>
        <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
      </li>
    </>
  );
}
