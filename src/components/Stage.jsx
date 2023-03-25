import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import dist from "/Images/CHOOSE YOUR DISTRICT.png";

const Stage = ({ setStage }) => {
  const [district, setDistrict] = useState("");
  const [load, setLoad] = useState(0);
  console.log(load);

  return (
    <>
      {load === 0 ? (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("${dist}")`,
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <div className="flex flex-col gap-5">
                <p>Choose your District</p>
                <p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs text-black"
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                  />
                </p>
                <a
                  className="link"
                  href="https://knowindia.india.gov.in/districts/"
                  target="_blank"
                >
                  I want to know my District
                </a>
                <div className="flex flex-col gap-5">
                  <button
                    className="btn btn-primary disabled:text-white"
                    disabled={district.trim().length === 0}
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
            </div>
          </div>
        </div>
      ) : (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://media.discordapp.net/attachments/1088927203477172328/1089148967390035968/image.png?width=643&height=646")`,
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <ProgressBar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Stage;
