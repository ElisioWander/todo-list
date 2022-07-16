import { useState } from "react";
import { useModalContext } from "../../Context/ModalContex";

interface NewTaskModalProps {
  selectedTask: string | undefined;
  handleUpdateTask: (editedTask: string) => void;
}

export function UpdateTaskModal({ handleUpdateTask, selectedTask }: NewTaskModalProps) {
  const [editedTask, setEditedTask] = useState('')
  const [value, setValue] = useState(selectedTask)

  const { isUpdateTaskModalOpen, handleCloseModal } = useModalContext();

  return (
    <>
      {isUpdateTaskModalOpen && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 bg-zinc-900 bg-opacity-75 animate-goVisible">
          <div className="w-[90%] p-5 rounded-md bg-white dark:bg-zinc-800 ">
            <h1 className="text-center text-xl text-zinc-700 dark:text-zinc-200 font-semibold">
              Wanna update your task?
            </h1>

            <div className="w-full py-5 flex flex-col justify-center ">
              <label
                className="text-xs mb-1 text-zinc-500 dark:text-zinc-200 "
                htmlFor="task"
              >
                Type it your task
              </label>
              <input
                id="task"
                type="text"
                className="px-4 py-2 rounded-md dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-zinc-800 "
                value={value}
                onChange={(e) => setEditedTask(e.target.value)}
                maxLength={30}
              />
            </div>
            <div className="flex gap-3 text-white ">
              <button
                onClick={() => handleUpdateTask(editedTask)}
                className="w-full py-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-all disabled:cursor-not-allowed disabled:hover:bg-blue-500 "
                disabled={editedTask.length === 0}
              >
                Edit
              </button>
              <button
                onClick={handleCloseModal}
                className="w-full py-2 rounded-full bg-gray-400 hover:brightness-75 transition-all "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
