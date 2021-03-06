import { ChangeEvent, useState } from "react";
import { Header } from "./Components/Header";
import { NewTaskButton } from "./Components/NewTaskButton";
import { NewTaskModal } from "./Components/NewTaskModal";
import { Task } from "./Components/Task";
import { UpdateTaskModal } from "./Components/UpdateTaskModal";
import { useModalContext } from "./Context/ModalContex";
import "./global.css";

const defaultTasks = [
  { id: 1, name: "Choose your task" },
  { id: 2, name: "Check your task" },
  { id: 3, name: "Update your task" },
  { id: 4, name: "Delete your task" },
]

type TasksData = Array<{
  id: number;
  name: string;
}>

type Task = {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<TasksData>(defaultTasks);
  const [newTaskInputValue, setNewTaskInputValue] = useState('');
  const [selectedTask, setSelectedTask] = useState<Task>()

  const { handleCloseModal } = useModalContext();

  function handleCreateNewTask() {
    const taskId = Math.random()
    const newTask = { id: taskId, name: newTaskInputValue }

    setTasks((state) => [...state, newTask]);

    handleCloseModal();
    //limpar o imput onde digita a nova tarefa
    setNewTaskInputValue("");
  }

  function handleUpdateTask(editedTask: string) {
    let tasksArray = [...tasks]
    
    for(let i in tasksArray) {
      if(tasksArray[i].id === selectedTask?.id) {
        tasksArray[i].name = editedTask
      }
    }

    setTasks(tasksArray)
    handleCloseModal()
  }

  function handleDeleteTask(taskId: number) {
    setTasks((state) => state.filter((allTasks) => allTasks.id !== taskId));
  }

  function handleGetSelectedTask(selectedTask: Task) {
    setSelectedTask(selectedTask)
  }

  function handleGetNewTaskInputValue(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    setNewTaskInputValue(inputValue)
  }

  const parsedTasks = tasks.map(task => (
    <Task
      key={task.name}
      task={task}
      onDeleteTask={handleDeleteTask}
      onGetSelectedTask={handleGetSelectedTask}
    />
  ))

  return (
    <>
      <div className="w-full max-w-[420px] pb-28 relative bg-zinc-100 dark:bg-zinc-900 transition-all duration-500 ">
        <Header />

        <main>
          <ul className="p-3">
            {parsedTasks}
          </ul>

          <NewTaskButton />
        </main>

        <NewTaskModal
          newTaskInputValue={newTaskInputValue}
          onGetNewTaskInputValue={handleGetNewTaskInputValue}
          onCreateNewTask={handleCreateNewTask}
        />

        <UpdateTaskModal 
          onUpdateTask={handleUpdateTask}
        />
      </div>
    </>
  );
}

export default App;
