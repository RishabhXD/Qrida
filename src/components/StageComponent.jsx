import React from "react";

const StageComponent = ({ text, setStage, buttonText, img }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p className="py-6 font-bold text-white">{text}</p>
          <div className="flex flex-col gap-5">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                setStage(4);
              }}
            >
              {buttonText}
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
  );
};

export default StageComponent;
