import { useState } from "react";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prepration from "./components/Prepration";
import Stage from "./components/Stage";
import OnBoard from "./components/OnBoard";
import ProgressBar from "./components/ProgressBar";
import Letters from "./components/Letters";

function App() {
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Hero name={name} setName={setName} />}
        ></Route>
        <Route
          path="/prep"
          element={<Prepration name={name} setName={setName} />}
        ></Route>
        <Route path="/tasks" element={<OnBoard />}></Route>
        <Route path="/progress" element={<ProgressBar />}></Route>
        <Route path="/letter" element={<Letters />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
