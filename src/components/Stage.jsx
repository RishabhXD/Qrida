import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stage = ({ setStage }) => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/progress");
  };
  const [district, setDistrict] = useState("");
  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="flex flex-col gap-5">
            <p>Choose your District</p>
            <p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              />
            </p>
            <a className="link">I want to know my District</a>
            <div className="flex flex-col gap-5">
              <button className="btn btn-primary" onClick={changePage}>
                Continue
              </button>
              <button
                className="btn bg-white text-black border-2 border-blue-500"
                onClick={(e) => {
                  setStage(0);
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
