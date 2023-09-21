import { Link } from "react-router-dom";
import Button from "./Button";

function StartingPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-36 mt-[-20rem] text-8xl">Pomodoro</h1>
      <div className="flex flex-col gap-4">
        <Link to="/appLayout">
          <Button name="Set your pomodoro" />
        </Link>
        <Link to="/pomodoroTechnique">
          <Button name="Read about pomodor technique"></Button>
        </Link>
      </div>
    </div>
  );
}

export default StartingPage;
