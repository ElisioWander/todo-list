import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useModalContext } from "../../Context/ModalContex";
import { Alert } from "../Alert";

type Task = {
  id: number;
  name: string;
}

interface TaskProps {
  task: Task;
  onDeleteTask: (taskId: number) => void;
  onGetSelectedTask: (selectedTask: Task) => void;
}

export function Task({
  task,
  onDeleteTask,
  onGetSelectedTask,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);

  const { handleOpenUpdateTaskModal } = useModalContext();

  function handleOpenAlert() {
    setActiveAlert(true)
  }

  function handleCloseAlert() {
    setActiveAlert(false)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
    setActiveAlert(false)
  }

  function handleCheckTask() {
    setIsChecked(true)
  }

  const taskInScreen = (
    <span onClick={handleOpenUpdateTaskModal} 
    className="cursor-pointer hover:brightness-75 transition-all"
    >
      {task.name}
    </span>
  )

  const taskIsCompleted = (
    <span className="line-through text-zinc-300 dark:text-zinc-600">
      {task.name}
    </span>
  )

  return (
    <>
      <li
        onClick={() => onGetSelectedTask(task)}
        className="w-full py-3 px-6 flex items-center relative justify-between hover:brightness-90 transition-all duration-500 text-zinc-500 dark:text-zinc-200 shadow-sm rounded-full mb-4 bg-white dark:bg-zinc-800 animate-goTop "
      >
        <FaTrashAlt
          fontSize={15}
          className="cursor-pointer hover:brightness-75 transition-all"
          onClick={handleOpenAlert}
        />
        {!isChecked ? (taskInScreen) : (taskIsCompleted)}
        <input
          type="checkbox"
          className="cursor-pointer"
          onClick={handleCheckTask}
          checked={isChecked && task === task}
          readOnly
        />
      </li>

      <Alert
        activeAlert={activeAlert}
        onDeleteTask={handleDeleteTask}
        onCloseAlert={handleCloseAlert}
      />
    </>
  );
}
