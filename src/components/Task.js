import { useEffect, useState } from "react";
import BreakWindow from "./BreakWindow";

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
      {showBreakWindow && <BreakWindow />}
    </>
  );
}
