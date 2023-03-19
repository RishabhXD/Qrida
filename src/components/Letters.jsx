import React, { useState } from "react";

const Letters = () => {
  const [reply1, setReply1] = useState("");
  const [reply2, setReply2] = useState("");
  const [reply3, setReply3] = useState("");
  const [visible, setVisible] = useState(false);
  const conversations = [
    {
      message1:
        "I am a 45 year old man living with my wife, son, daughter, mother and father. For the past 7 months, we’ve been trying to get electricity connections from the electricity department but each time, we’re being asked to pay a fee. Please help our community get electricity connections. All our children will be able to study better.",
      reply1: reply1,
      message2:
        "I’ve discovered concerning activity in the electricity department. Requesting an appointment to meet you as soon as possible",
      reply2: reply2,
      message3:
        "Hello Sir! I want to set up a cinema business in the state. My mother is visiting a relative here. She has asked me to talk to you.",
      reply3: reply3,
    },
  ];
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="max-w-md">
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Dear Sir/Ma'am</h2>
                <p>{conversations[0].message1}</p>
                <div className="card-actions justify-end">
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-3" className="btn btn-ghost">
                    Close
                  </label>
                  {/* Put this part before </body> tag */}

                  <button
                    className="btn btn-primary"
                    onClick={() => setVisible(true)}
                  >
                    Reply
                  </button>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">Warning!!</h3>
                    <p className="py-4">
                      Aspirants love to deal with the complexities of the real
                      world. The best way to kick-start your preparation is to
                      understand the complexities that a bureaucrat faces in
                      dealing with day to day problems of society
                    </p>
                  </div>
                </div>
                <textarea
                  className={`textarea , ${visible ? "block" : "hidden"}`}
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
