import "./App.css";
import StartingPage from "./components/StartingPage";
import PomodoroTechnique from "./components/PomodoroTechnique";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="appLayout" element={<AppLayout />} />
        <Route path="pomodoroTechnique" element={<PomodoroTechnique />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
