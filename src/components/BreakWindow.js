import Timer from "./Timer";

function BreakWindow({ breakTime }) {
  return (
    <div>
      <h1>Break</h1>
      <Timer time={breakTime} />
    </div>
  );
}

export default BreakWindow;
