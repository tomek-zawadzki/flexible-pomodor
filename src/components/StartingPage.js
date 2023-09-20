import Button from "./Button";

function StartingPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-36 mt-[-20rem] text-8xl">Pomodoro</h1>
      <div className="flex flex-col gap-4">
        <Button name="Set your pomodoro" />
        <Button name="Read about pomodor technique"></Button>
      </div>
    </div>
  );
}

export default StartingPage;
