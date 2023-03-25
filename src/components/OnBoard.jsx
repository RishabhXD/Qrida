import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const OnBoard = ({ name }) => {
  const navigate = useNavigate();
  const { id, ministry } = useParams();

  const [page, setPage] = useState(Number(id));
  const changePage = () => {
    navigate(`/letter/${id}/${ministry}`);
  };
  let render = "";
  console.log(ministry);
  switch (page) {
    case 1:
      render = (
        <tr className="hover">
          <th>1</th>
          <td>Office</td>
          <td>19/3/2023</td>
          <td>Sunday</td>
          <td>
            <div className="flex flex-row gap-4">
              <label htmlFor="my-modal-4" className="btn btn-sm btn-ghost">
                Deny
              </label>
              <button className="btn btn-sm btn-primary" onClick={changePage}>
                Read
              </button>
            </div>
          </td>
        </tr>
      );
      break;
    case 2:
      render = (
        <>
          <tr className="hover">
            <th>1</th>
            <td>Office </td>
            <td>19/3/2023</td>
            <td>Sunday</td>
            <td>Replied</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Urgent </td>
            <td>21/3/2023</td>
            <td>Tuesday</td>
            <td>
              <div className="flex flex-row gap-4">
                <label htmlFor="my-modal-4" className="btn btn-sm btn-ghost">
                  Deny
                </label>
                <button className="btn btn-sm btn-primary" onClick={changePage}>
                  Read
                </button>
              </div>
            </td>
          </tr>
        </>
      );
      break;
    case 3:
      render = (
        <>
          <tr className="hover">
            <th>1</th>
            <td>Office </td>
            <td>19/3/2023</td>
            <td>Sunday</td>
            <td>Replied</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Urgent </td>
            <td>21/3/2023</td>
            <td>Tuesday</td>
            <td>Replied</td>
          </tr>
          <tr className="hover">
            <th>3</th>
            <td>New Mail</td>
            <td>24/3/2023</td>
            <td>Friday</td>
            <td>
              <div className="flex flex-row gap-4">
                <label htmlFor="my-modal-4" className="btn btn-sm btn-ghost">
                  Deny
                </label>
                <button className="btn btn-sm btn-primary" onClick={changePage}>
                  Read
                </button>
              </div>
            </td>
          </tr>
        </>
      );
      break;
  }

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://media.discordapp.net/attachments/1088927203477172328/1089150870110863460/image.png?width=645&height=646")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero min-h-screen text-white w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-xl font-bold">
              {ministry ? ministry : "Ministry"}
            </h1>
            <h1 className="text-xl font-bold">Officer {name}</h1>
            <p className="py-6">
              This is your first day at work. It feels like a beginning again,
              exactly as the first day of your preparation for civil services.
              You start receiving your official and unofficial correspondence
              from mail, letters, phones and sometimes, the odd co-incidences
              observed in daily life...
            </p>
            <table className="table w-full text-black">
              <thead>
                <tr>
                  <th></th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>{render}</tbody>
            </table>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative bg-warning" htmlFor="">
                <h3 className="text-lg font-bold">Warning Letter!</h3>
                <p className="py-4">
                  your office found out about your lack of intent to deal with a
                  citizen’s concerns. Do better next time!
                </p>
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoard;
