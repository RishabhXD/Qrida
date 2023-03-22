import { useState } from "react";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prepration from "./components/Prepration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <Route path="/tasks/:id" element={<OnBoard />}></Route>
        <Route path="/progress" element={<ProgressBar />}></Route>
        <Route path="/letter/:id" element={<Letters />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
