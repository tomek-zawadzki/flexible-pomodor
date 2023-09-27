import { useContext, useState } from "react";
import { TasksContext } from "./AppLayout";
import Button from "./Button";

export function TaskAdd({ onAddTask }) {
  const [time, setTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [sessions, setSessions] = useState(4);
  const [title, setTitle] = useState("");
  const [showAddTask, setShowAddTask] = useState(true);

  const tasks = useContext(TasksContext);

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

    setShowAddTask(false);
  }
  console.log(tasks.length);
  return (
    <>
      {tasks.length > 0 ? (
        <button
          className="mb-4 border p-2"
          onClick={() => setShowAddTask((show) => !show)}
        >
          {showAddTask ? "Hide form" : "Add new task"}
        </button>
      ) : null}

      {showAddTask && (
        <form
          className="flex w-[50%] flex-col items-center  gap-1"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full items-center justify-between">
            <label className="text-xl">Task</label>
            <input
              className="w-56	border border-solid border-black p-1 text-center"
              type="text"
              placeholder="type your task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <label className="text-xl">Session time</label>
            <input
              className="w-56	border border-solid border-black p-1 text-center"
              type="number"
              placeholder="25:00"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <label className="text-xl">Number of sessions</label>
            <input
              className="w-56	border border-solid border-black p-1 text-center"
              type="number"
              placeholder="4"
              value={sessions}
              onChange={(e) => setSessions(e.target.value)}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <label className="text-xl">Break time</label>
            <input
              className="w-56	border border-solid border-black bg-slate-50 p-1 text-center"
              type="number"
              placeholder="5:00"
              value={breakTime}
              onChange={(e) => setBreakTime(e.target.value)}
            />
          </div>
          <div className="pb-12 pt-8">
            <Button name="Add" />
          </div>
        </form>
      )}
    </>
  );
}
