import { useEffect, useState } from "react";
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

function TasksList({ tasks, selectedTask, onSelected }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          selectedTask={selectedTask}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
}

function Task({ task, selectedTask, onSelected }) {
  const [minutes, setMinutes] = useState(`${task.time}`);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  const isSelected = selectedTask?.id === task.id;

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (isRunning) {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, isRunning]);

  function startTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setMinutes(`${task.time}`);
    setSeconds(0);
  }

  return (
    <li>
      <h2 onClick={() => onSelected(task)}>{task.title}</h2>
      <div className={isSelected ? "" : "hidden"}>
        <p>Session time: {task.time}</p>
        <p>Break time: {task.breakTime}</p>
        <p>
          Session: <span>1</span>/<span>{task.sessions}</span>
        </p>

        <div>
          <div>
            {minutes}:{seconds}
          </div>
          <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
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

    setTitle("");
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
