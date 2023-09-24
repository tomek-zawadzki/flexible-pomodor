import { useState } from "react";
import Timer from "./Timer";

function BreakWindow({ task }) {
  const { breakTime } = task;

  const [minutes, setMinutes] = useState(breakTime);
  const [seconds, setSeconds] = useState(0);
  return (
    <div>
      <h1>Break</h1>
      <Timer
        time={breakTime}
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  );
}

export default BreakWindow;
