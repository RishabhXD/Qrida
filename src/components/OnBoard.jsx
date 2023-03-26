import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";

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
        <tr className="hover bg-info">
          <th>
            <AiOutlineInfoCircle fontSize={25} />
          </th>
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
            <th>
              <AiOutlineInfoCircle fontSize={25} />
            </th>
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
            <th>
              <AiOutlineInfoCircle fontSize={25} />
            </th>
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
      className="hero min-h-screen overflow-x-auto"
      style={{
        backgroundImage: `url("https://media.discordapp.net/attachments/1088927203477172328/1089150870110863460/image.png?width=645&height=646")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white w-full">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:max-w-3xl lg:px-8 xl:max-w-5xl xl:px-10">
          <h1 className="mb-5 text-3xl sm:text-4xl font-bold">
            {ministry ? ministry : "Ministry"}
          </h1>
          <h1 className="mb-5 text-3xl sm:text-4xl font-bold">
            Officer {name}
          </h1>
          <p className="mb-5">
            This is your first day at work. It feels like a beginning again,
            exactly as the first day of your preparation for civil services. You
            start receiving your official and unofficial correspondence from
            mail, letters, phones and sometimes, the odd co-incidences observed
            in daily life...
          </p>
          <div className="">
            <div className="overflow-x-auto">
              <table className="table w-full text-black">
                <thead className="bg-opacity-70">
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
            </div>
          </div>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label
              className="modal-box relative bg-warning sm:w-1/2 md:w-1/3 lg:w-1/4"
              htmlFor=""
            >
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
