import { useState } from "react";
import { NewTaskButton } from "./Components/NewTaskButton";
import { NewTaskModal } from "./Components/NewTaskModal";
import { Task } from "./Components/Task";
import { useModalContext } from "./Context/ModalContex";
import "./global.css";

const defaultTasks = ['Choose your task', 'Check your task', 'Delete your task']

function App() {
  const [tasks, setTasks] = useState<string[]>(defaultTasks);
  const [newTask, setNewTask] = useState('')
  
  const { handleCloseModal } = useModalContext();

  function handleCreateNewTask() {
    setTasks((state) => [...state, newTask]);

    handleCloseModal();
    setNewTask('')
  }

  function handleDeleteTask(task: string) {
    setTasks(state => state.filter(allTasks => allTasks !== task ))
  }

  return (
    <>
      <div className="w-full h-screen max-w-[420px] relative bg-zinc-100 ">
        <header className="w-full h-20 flex items-center justify-center text-xl text-zinc-600">
          All Tasks
        </header>

        <main>
          <ul className="p-3">
            {tasks?.map((task) => (
              <div key={task}>
                <Task onHandleDeleteTask={handleDeleteTask} task={task} />
              </div>
            ))}
          </ul>

          <NewTaskButton />
        </main>

        <NewTaskModal 
          onCreateNewTask={handleCreateNewTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />
      </div>
    </>
  );
}

export default App;
