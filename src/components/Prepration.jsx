import React, { useState } from "react";
import StageComponent from "./StageComponent";
import Stage from "./Stage";
import img1 from "/Images/OPTION AC.png";
import img2 from "/Images/OPTION B.png";
const Prepration = ({ name, setName }) => {
  const [stage, setStage] = useState(0);
  console.log(stage);
  let render = "";
  const textArr = [
    "A pre-preparation routine can be defined as a set of nudges in the form of conversation cues and lines of thinking, connecting & having an interesting conversation relevant to the preparation material",
    "Good for you. Keep up the desire by using this feature tool whenever you think you're not in the preparation zone and state of mind",
    "As per clinical researchers and elder members of the community, being bored is a symptom of monotony in the mind, lack of 'being in the zone' like desire & focus and lack of paying attention",
  ];
  const buttonArr = [
    "Let’s get started",
    "Try a pre-prep conversation",
    "Let's prepare",
  ];

  switch (stage) {
    case 0:
      render = (
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: `url("/Images/How_s your prep going_ .png")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <p className="py-6 font-bold text-white">
                Hello {name}, how’s your preparation going today?
              </p>
              <ul className="menu bg-base-100 w-56 rounded-box">
                <li>
                  <button
                    onClick={() => {
                      setStage(1);
                    }}
                  >
                    A. Meh! Let’s see
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStage(2);
                    }}
                  >
                    B. Can’t wait to begin!
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStage(3);
                    }}
                  >
                    C. Bored right now
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setStage(4);
                    }}
                  >
                    D. Let’s explore
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
      break;
    case 1:
      render = (
        <StageComponent
          text={textArr[0]}
          buttonText={buttonArr[0]}
          setStage={setStage}
          img={img1}
        />
      );
      break;
    case 2:
      render = (
        <StageComponent
          text={textArr[1]}
          buttonText={buttonArr[1]}
          setStage={setStage}
          img={img2}
        />
      );
      break;
    case 3:
      render = (
        <StageComponent
          text={textArr[2]}
          img={img1}
          buttonText={buttonArr[2]}
          setStage={setStage}
        />
      );
      break;
    case 4:
      render = <Stage setStage={setStage} />;
      break;
    default:
      break;
  }
  return <div className="">{render}</div>;
};

export default Prepration;
