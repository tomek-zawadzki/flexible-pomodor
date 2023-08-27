import { useState } from "react";
import { TasksList } from "./components/TasksList";
import { TaskAdd } from "./components/TaskAdd";
import "./App.css";

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
    <>
      <Header />
      <TaskAdd onAddTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        selectedTask={selectedTask}
        onSelected={handleSelectedTask}
      />
    </>
  );
}

function Header() {
  return <h1>Pomodoro</h1>;
}

export default App;
