import Timer from "./Timer";
import BreakWindow from "./BreakWindow";
import { useEffect, useState } from "react";

export function Task({ task, selectedTask, onSelected, classNameValue }) {
  const { time, id, title, breakTime, sessions } = task;
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [showBreak, setShowBreak] = useState(false);
  const [currentSession, setCurrentSession] = useState(1);

  // const isSelected = selectedTask?.id === id;

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setShowBreak(true);
      setMinutes(time);
      setCurrentSession((currentSession) => currentSession + 1);
    }
  }, [minutes, seconds, time]);

  if (currentSession > sessions) {
    alert("work done");
    setCurrentSession(sessions);
    setShowBreak(false);
  }

  return (
    <>
      <li className="flex h-fit w-56 flex-col gap-6 border-2 border-solid p-4">
        <h2 className="text-center text-2xl" onClick={() => onSelected(task)}>
          {title}
        </h2>
        <div
          // className={`${
          //   isSelected ? "" : "hidden"
          // } flex w-auto flex-col gap-2 `}
          className={classNameValue}
        >
          <p className="font-bold">
            Session time: <span className="font-normal">{time}</span>
          </p>
          <p className="">Break time: {breakTime}</p>
          <p>
            Session: <span>{currentSession}</span>/<span>{sessions}</span>
          </p>

          <Timer
            time={time}
            minutes={minutes}
            seconds={seconds}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
          />
        </div>
      </li>
      {showBreak && <BreakWindow task={task} setShowBreak={setShowBreak} />}
    </>
  );
}
