import React, { useState } from "react";
import { Data } from "../data";
import { useNavigate, useParams } from "react-router-dom";

const Letters = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [messageId, setMessageId] = useState(Number(id));
  console.log(messageId);
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

  // setMessage(Data[index]);

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
                    <p className="card-subtitle">{Data[index][0].message1}</p>
                  </div>
                ) : messageId === 2 ? (
                  <div>
                    <p className="card-subtitle">{Data[index][1].message2}</p>
                  </div>
                ) : (
                  <div>
                    <p className="card-subtitle">{Data[index][2].message3}</p>
                  </div>
                )}
                <div className="card-actions justify-end">
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-3" className="btn btn-ghost">
                    <button
                      onClick={() => {
                        navigate(`/tasks/${id}`);
                      }}
                    >
                      Close
                    </button>
                  </label>
                  <label htmlFor="my-modal" className="btn btn-primary">
                    Reply
                  </label>
                  {
                    
                  }
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
