import { createContext, useState } from "react";
import { TasksList } from "./TasksList";
import { TaskAdd } from "./TaskAdd";
import TaskView from "./TaskView";

export const TasksContext = createContext([]);

function AppLayout() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleSelectedTask(task) {
    setSelectedTask((curr) => (curr?.id === task.id ? null : task));
  }

  return (
    <TasksContext.Provider value={{ tasks, selectedTask, handleSelectedTask }}>
      <div className="flex flex-col items-center">
        <Header />
        <TaskAdd onAddTask={handleAddTask} />
        <TasksList
          tasks={tasks}
          selectedTask={selectedTask}
          onSelected={handleSelectedTask}
        />
        <TaskView
          tasks={tasks}
          selectedTask={selectedTask}
          onSelected={handleSelectedTask}
        />
      </div>
    </TasksContext.Provider>
  );
}

function Header() {
  return <h1 className="m-8 text-center text-[52px]">Pomodoro</h1>;
}

export default AppLayout;
