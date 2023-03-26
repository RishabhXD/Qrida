import React, { useState, useEffect } from "react";
import { Data } from "../data";
import { useNavigate, useParams } from "react-router-dom";
import { struct } from "../howTo";
const arrMinistry = [
  "Central",
  "Culture",
  "Human Resources",
  "Aviation",
  "Power",
  "Agriculture",
  "Health",
  "Pollution",
  "Transport",
  "Communication",
  "Education",
];

const Letters = ({ name }) => {
  let { id, ministry } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");
  const myMinistry = arrMinistry.indexOf(ministry);
  const [index, setIndex] = useState(0);
  const messageId = Number(id);
  const [img, setImg] = useState("");
  const howTo = struct[myMinistry];

  useEffect(() => {
    const len = Data[myMinistry].length;
    const randomInt = Math.floor(Math.random() * len);
    setIndex(randomInt);
    if (len === 1) {
      setIndex(0);
    }
    switch (messageId) {
      case 1:
        setImg(Data[myMinistry][index][0].img1);
        break;
      case 2:
        setImg(Data[myMinistry][index][1].img2);
        break;
      case 3:
        setImg(Data[myMinistry][index][2].img3);
        break;
      default:
        break;
    }
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      setVisible(true);
      console.log(visible);
    } else {
      setVisible(false);
      console.log("input value is empty");
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content ">
        <div className="max-w-md">
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl opacity-80">
              <div className="card-body">
                <h2 className="card-title">Dear {name}</h2>
                {messageId === 1 ? (
                  <div>
                    <p className="card-subtitle">
                      {Data[myMinistry][index][0].message1}
                    </p>
                  </div>
                ) : messageId === 2 ? (
                  <div>
                    <p className="card-subtitle">
                      {Data[myMinistry][index][1].message2}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="card-subtitle">
                      {Data[myMinistry][index][2].message3}
                    </p>
                  </div>
                )}
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      navigate(`/tasks/${id}/${ministry}`);
                    }}
                    className="btn btn-ghost"
                  >
                    Close
                  </button>

                  <label
                    htmlFor="my-modal"
                    className="btn btn-primary"
                    onClick={() => {
                      //update id to id+1 and navigate
                      id = Number(id) + 1;
                      navigate(`/tasks/${id}/${ministry}`);
                      //navigate to new page if id is 4
                      if (id === 4) {
                        navigate(`/complete`);
                      }
                    }}
                    disabled={message.trim().length === 0}
                  >
                    Reply
                  </label>
                </div>
                <textarea
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Reply"
                  className="px-2"
                ></textarea>
                <div className="flex flex-row justify-between">
                  <label className="label">
                    <span htmlFor="my-modal-1" className="label-text-alt">
                      How to reply
                    </span>
                    <input
                      type="checkbox"
                      id="my-modal-1"
                      className="modal-toggle opacity-100"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">How to reply?</h3>
                        {messageId === 1 ? (
                          <p className="py-4">{howTo}</p>
                        ) : (
                          <p className="py-4">
                            Mention the important words and reply back with an
                            acknowledgement
                          </p>
                        )}
                        <div className="modal-action">
                          <label htmlFor="my-modal-1" className="btn">
                            Got it
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="label">
                    <span htmlFor="my-modal" className="label-text-alt">
                      Clue
                    </span>
                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle opacity-100"
                    />
                    <div className="modal opacity-100">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Clue</h3>
                        {messageId === 1 ? (
                          <p className="py-4">
                            Aspirants love to deal with the complexities of the
                            real world. A good way to kick-start your
                            preparation is to accept the complexities that a
                            civil servant faces in dealing with day to day
                            problems of society
                          </p>
                        ) : messageId === 2 ? (
                          <p className="py-4">
                            Aspirants love to connect events and information
                            from around the world. Before starting preparation,
                            it is important to be mentally active and warmed up.
                          </p>
                        ) : (
                          <p className="py-4">
                            You'll start to see some patterns in the
                            information. Preparing for the civil services needs
                            a lot of inter-disiciplinary thinking and logical &
                            positive approach to solving real-world problems.
                          </p>
                        )}

                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn">
                            Got it
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letters;
