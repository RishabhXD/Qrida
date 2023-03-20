import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OnBoard = ({ setStage }) => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const [page, setPage] = useState(0);
  const changePage = () => {
    navigate("/letter");
  };
  let render = "";
  switch (page) {
    case 0:
      render = (
        <tr className="hover">
          <th>1</th>
          <td>New Correspondence </td>
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
    case 1:
      render = (
        <>
          <tr className="hover">
            <th>1</th>
            <td>New Correspondence </td>
            <td>19/3/2023</td>
            <td>Sunday</td>
            <td>Replied</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Reply </td>
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
  }
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
          <table className="table w-full">
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
  );
};

export default OnBoard;
