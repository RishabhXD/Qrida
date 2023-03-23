import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const Stage = ({ setStage }) => {
  const [district, setDistrict] = useState("");
  const [load, setLoad] = useState(0);
  console.log(load);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {load === 0 ? (
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
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setLoad(1);
                  }}
                >
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
          ) : (
            <ProgressBar />
          )}
        </div>
      </div>
    </div>
  );
};

export default Stage;
