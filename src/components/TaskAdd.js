import { useState } from "react";

import Button from "./Button";

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
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <label className="text-2xl">Task</label>
      <input
        className="w-64	border-2 border-solid border-black p-1 text-center"
        type="text"
        placeholder="type your task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="text-2xl">Session time</label>
      <input
        className="w-64	border-2 border-solid border-black p-1 text-center"
        type="number"
        placeholder="25:00"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label className="text-2xl">Number of sessions</label>
      <input
        className="w-64	border-2 border-solid border-black p-1 text-center"
        type="number"
        placeholder="4"
        value={sessions}
        onChange={(e) => setSessions(e.target.value)}
      />
      <label className="text-2xl">Break time</label>
      <input
        className="w-64	border-2 border-solid border-black p-1 text-center"
        type="number"
        placeholder="5:00"
        value={breakTime}
        onChange={(e) => setBreakTime(e.target.value)}
      />
      <div className="pb-12 pt-8">
        <Button name="Add" />
      </div>
    </form>
  );
}
