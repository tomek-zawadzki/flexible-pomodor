import "./App.css";

function App() {
  return (
    <>
      <Header />
      <TaskAdd />
      <TaskSession />
    </>
  );
}

function Header() {
  return <h1>Pomodoro</h1>;
}

function TaskAdd() {
  return (
    <>
      <label>Task:</label>
      <input type="text" placeholder="type your task" />
      <button>Add</button>
      <SetTimer />
    </>
  );
}

function SetTimer() {
  return (
    <>
      <label>Session time</label>
      <input type="number" placeholder="25:00" />
      <label>Number of sessions</label>
      <input type="number" placeholder="4" />
      <label>Break time</label>
      <input type="number" placeholder="5:00" />
    </>
  );
}

function TaskSession() {
  return (
    <>
      <h2>Task name</h2>
      <div>
        <p>Session time: 25:00</p>
        <p>Break time: 5:00</p>
        <p>
          Session: <span>1</span>/<span>4</span>
        </p>
      </div>
      <div>
        <div>25:00</div>
        <div>
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
