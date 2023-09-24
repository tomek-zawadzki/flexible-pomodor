import { useEffect, useState } from "react";

function Timer({ time, minutes, seconds, setMinutes, setSeconds }) {
  // const [minutes, setMinutes] = useState(time);
  // const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

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
  }, [minutes, seconds, setSeconds, setMinutes, isRunning]);

  function startTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setMinutes(time);
    setSeconds(0);
  }

  return (
    <div>
      <div>
        {minutes}:{seconds}
      </div>
      <div className="flex justify-between gap-2">
        <button
          className="rounded-md border-2 border-black px-2 py-1"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="rounded-md border-2 border-black px-2 py-1"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className="rounded-md border-2 border-black px-2 py-1"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
