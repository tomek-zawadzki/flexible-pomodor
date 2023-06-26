import { useState } from "react";
import "./App.css";

const allTasks = [{ id: 121212, title: "Zadanko" }];

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  return (
    <>
      <Header />
      <TasksList tasks={tasks} />
      <TaskAdd onAddTask={handleAddTask} />
    </>
  );
}

function Header() {
  return <h1>Pomodoro</h1>;
}

function TasksList({ tasks }) {
  console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}

function Task({ task }) {
  return (
    <li>
      <h2>{task.title}</h2>
      <div>
        <p>Session time: {task.time}</p>
        <p>Break time: {task.breakTime}</p>
        <p>
          Session: <span>1</span>/<span>{task.sessions}</span>
        </p>
      </div>
      <div>
        <div>{task.time}</div>
        <div>
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </div>
    </li>
  );
}

function TaskAdd({ onAddTask }) {
  const [time, setTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [sessions, setSessions] = useState(4);
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !time || !breakTime || !sessions) return;

    const id = crypto.randomUUID();

    const newTask = {
      id,
      title,
      time,
      breakTime,
      sessions,
    };

    onAddTask(newTask);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Task:</label>
      <input
        type="text"
        placeholder="type your task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Session time</label>
      <input
        type="number"
        placeholder="25:00"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label>Number of sessions</label>
      <input
        type="number"
        placeholder="4"
        value={sessions}
        onChange={(e) => setSessions(e.target.value)}
      />
      <label>Break time</label>
      <input
        type="number"
        placeholder="5:00"
        value={breakTime}
        onChange={(e) => setBreakTime(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default App;
