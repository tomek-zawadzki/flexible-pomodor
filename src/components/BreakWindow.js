import { useEffect, useState } from "react";
import Timer from "./Timer";

function BreakWindow({ task, setShowBreak }) {
  const { breakTime } = task;

  const [minutes, setMinutes] = useState(breakTime);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setShowBreak(false);
    }
  }, [minutes, seconds, setShowBreak]);

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center  p-5">
      <h2 className="text-4xl">Break</h2>
      <div className="">
        <Timer
          time={breakTime}
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      </div>
    </div>
  );
}

export default BreakWindow;
