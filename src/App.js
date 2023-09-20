import { useState } from "react";
import { TasksList } from "./components/TasksList";
import { TaskAdd } from "./components/TaskAdd";

import "./App.css";
import StartingPage from "./components/StartingPage";
import PomodoroTechnique from "./components/PomodoroTechnique";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleSelectedTask(task) {
    setSelectedTask((curr) => (curr?.id === task.id ? null : task));
  }

  return (
    <div className="flex flex-col items-center">
      {/* <Header />
      <TaskAdd onAddTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        selectedTask={selectedTask}
        onSelected={handleSelectedTask}
      /> */}
      {/* <StartingPage /> */}
      <PomodoroTechnique />
    </div>
  );
}

function Header() {
  return <h1 className="m-8 text-center text-[52px]">Pomodoro</h1>;
}

export default App;
