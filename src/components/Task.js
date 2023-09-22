import Timer from "./Timer";
import BreakWindow from "./BreakWindow";

export function Task({ task, selectedTask, onSelected }) {
  const { time, id, title, breakTime, sessions } = task;

  const isSelected = selectedTask?.id === id;

  return (
    <>
      <li className="flex w-56 flex-col gap-6 border-2 border-solid p-4">
        <h2 className="text-center text-2xl" onClick={() => onSelected(task)}>
          {title}
        </h2>
        <div
          className={`${
            isSelected ? "" : "hidden"
          } flex w-auto flex-col gap-2 `}
        >
          <p className="font-bold">
            Session time: <span className="font-normal">{time}</span>
          </p>
          <p>Break time: {breakTime}</p>
          <p>
            Session: <span>1</span>/<span>{sessions}</span>
          </p>

          <Timer time={time} />
        </div>
      </li>
      {/* {minutes === 0 && seconds === 0 ? <BreakWindow /> : null} */}
    </>
  );
}
