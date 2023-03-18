import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnBoard = ({ setStage }) => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/letter");
  };
  return (
    <div className="hero min-h-screen bg-base-200 w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-xl font-bold">Show Ministry</h1>
          <h1 className="text-xl font-bold">Show Level</h1>
          <p className="py-6">
            This is your first day at work. It feels like a beginning again,
            exactly as the first day of your preparation for civil services. You
            start receiving your official and unofficial correspondence from
            mail, letters, phones and sometimes, the odd co-incidences observed
            in daily life...
          </p>
          <div className="alert shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <span>You have received a new correspondence </span>
            </div>
            <div className="flex-none">
              <label htmlFor="my-modal-4" className="btn btn-sm btn-ghost">
                Deny
              </label>
              <button className="btn btn-sm btn-primary" onClick={changePage}>
                Read
              </button>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative bg-warning" htmlFor="">
                  <h3 className="text-lg font-bold">Warning Letter!</h3>
                  <p className="py-4">
                    your office found out about your lack of intent to deal with
                    a citizen’s concerns. Do better next time!
                  </p>
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoard;
