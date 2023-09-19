import { useEffect, useState } from "react";
import BreakWindow from "./BreakWindow";
import Button from "./Button";

export function Task({ task, selectedTask, onSelected }) {
  const [minutes, setMinutes] = useState(`${task.time}`);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);
  const [showBreakWindow, setShowBreakWindow] = useState(false);

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
    }, 100);

    return () => clearInterval(interval);
  }, [seconds, minutes, isRunning]);

  function handleShowBreakWindow() {
    setShowBreakWindow((show) => !show);
  }

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

  // if (minutes === 0 && seconds === 0) {
  //   setShowBreakWindow(true);
  // }

  return (
    <>
      <li className="flex w-56 flex-col gap-6 border-2 border-solid p-4">
        <h2 className="text-center text-2xl" onClick={() => onSelected(task)}>
          {task.title}
        </h2>
        <div
          className={`${
            isSelected ? "" : "hidden"
          } flex w-auto flex-col gap-2 `}
        >
          <p className="font-bold">
            Session time: <span className="font-normal">{task.time}</span>
          </p>
          <p>Break time: {task.breakTime}</p>
          <p>
            Session: <span>1</span>/<span>{task.sessions}</span>
          </p>

          <div>
            <div>
              {minutes}:{seconds}
            </div>
            <div className="flex justify-between gap-2">
              <Button name="Start" onClick={startTimer} />
              <Button name="Stop" onClick={stopTimer} />
              <Button name="Reset" onClick={resetTimer} />
            </div>
          </div>
        </div>
      </li>
      {showBreakWindow && <BreakWindow />}
    </>
  );
}
