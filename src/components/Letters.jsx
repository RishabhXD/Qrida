import React, { useState, useEffect } from "react";
import { Data } from "../data";
import { useNavigate, useParams } from "react-router-dom";
const arrMinistry = [
  "Central",
  "Culture",
  "Human Resource",
  "Aviation",
  "Power",
  "Agriculture",
  "Health",
  "Pollution",
  "Transport",
  "Communication",
  "Education",
];

const Letters = () => {
  let { id, ministry } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [myMinistry, setMyMinistry] = useState(arrMinistry.indexOf(ministry));
  const [index, setIndex] = useState(0);
  const [messageId, setMessageId] = useState(Number(id));

  useEffect(() => {
    const len = Data[myMinistry].length;
    const randomInt = Math.floor(Math.random() * len);
    setIndex(randomInt);
    if (len === 1) {
      setIndex(0);
    }
  }, []);
  console.log(index);

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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="max-w-md">
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Dear Sir/Ma'am</h2>
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
                  id="my-modal-3"
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Reply"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letters;
