import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ name, setName }) => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/prep");
  };
  const changeVal = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hello there
          </h1>
          <p className="pt-6">
            Welcome to Qrida’s pre-preparation conversation!
          </p>
          <p className="pb-6">Enter your name to begin</p>
          <input
            type="text"
            placeholder="Enter Name"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
            value={name}
            onChange={changeVal}
          />
          <button
            className="btn btn-primary"
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
