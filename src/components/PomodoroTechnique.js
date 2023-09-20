import Button from "./Button";

function PomodoroTechnique() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-28 mt-[-16rem] text-6xl">Pomodoro technique</h2>
      <div className="flex w-9/12 flex-col gap-4">
        <p>
          What is the Pomodoro Technique? The Pomodoro Technique is a time
          management method based on 25-minute stretches of focused work broken
          by five-minute breaks. Longer breaks, typically 15 to 30 minutes, are
          taken after four consecutive work intervals.
        </p>
        <p>
          In this application you can create your own pomodoro. You can set the
          original Pomodoro or customize it to your needs. You can specify how
          long you want to work and how long breaks you need. It's all up to
          you.
        </p>
      </div>
      <div className="mt-20">
        <Button name="Set your pomodoro" />
      </div>
    </div>
  );
}

export default PomodoroTechnique;
