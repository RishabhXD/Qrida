import React from "react";
import { useNavigate } from "react-router-dom";
// import Hello from "../assets/Images/Hello There.png";
const Hero = ({ name, setName }) => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/prep");
  };
  const changeVal = (e) => {
    setName(e.target.value);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/Images/Hello There.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="font-bold text-4xl text-white">Hello there 👋</h1>
          <p className="pt-6">
            Welcome to Qrida’s pre-preparation conversation!
          </p>
          <p className="pb-6">Enter your name to begin</p>
          <input
            type="text"
            placeholder="Enter Name"
            className="input input-bordered input-primary w-full max-w-xs mb-6 text-black"
            value={name}
            onChange={changeVal}
          />
          <button
            className="btn btn-primary disabled:text-white disabled:btn-ghost"
            onClick={changePage}
            disabled={name.trim().length === 0}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
