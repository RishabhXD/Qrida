import { useState } from "react";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prepration from "./components/Prepration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnBoard from "./components/OnBoard";
import ProgressBar from "./components/ProgressBar";
import Letters from "./components/Letters";
import Complete from "./components/Complete";
// import ProgressBar from "./components/ProgressBar";

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
        <Route
          path="/tasks/:id/:ministry"
          element={<OnBoard name={name} />}
        ></Route>
        <Route path="/progress" element={<ProgressBar />}></Route>
        <Route
          path="/letter/:id/:ministry"
          element={<Letters name={name} />}
        ></Route>
        <Route path="/complete" element={<Complete />}></Route>
        <Route path="/progress" element={<ProgressBar />}></Route>
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
