import { useState } from "react";

export function TaskAdd({ onAddTask }) {
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
