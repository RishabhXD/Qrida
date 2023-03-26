import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/progress.css";
const ministries = [
  "Central",
  "Power",
  "Culture",
  "Communications",
  "Agriculture",
  "Pollution",
  "Aviation",
  "Human Resources",
  "Education",
  "Transport",
  "Health",
];
const getRandomMinistry = () => {
  const randomInt = Math.floor(Math.random() * ministries.length);
  return ministries[randomInt];
};

export default function ProgressBar() {
  const navigate = useNavigate();
  const [ministy, setMinisty] = useState("");
  useEffect(() => {
    setMinisty(getRandomMinistry());
  }, []);
  function startTimer(duration) {
    var timeout = setTimeout(function () {
      var time = duration;
      var i = 1;
      var k = (i / duration) * 100;
      var l = 100 - k;
      i++;
      document.getElementById("c1").style.strokeDasharray = [l, k];
      document.getElementById("c2").style.strokeDasharray = [k, l];
      document.getElementById("c1").style.strokeDashoffset = l;
      document.getElementById("counterText").innerHTML = duration;
      var interval = setInterval(function () {
        if (i > time) {
          clearInterval(interval);
          clearTimeout(timeout);
          // window.location.href = "http://127.0.0.1:5173/tasks";
          navigate(`/tasks/1/${ministy}`);
          return;
        }
        k = (i / duration) * 100;
        l = 100 - k;
        document.getElementById("c1").style.strokeDasharray = [l, k];
        document.getElementById("c2").style.strokeDasharray = [k, l];
        document.getElementById("c1").style.strokeDashoffset = l;
        // console.log(k, l);
        document.getElementById("counterText").innerHTML = duration + 1 - i;
        i++;
      }, 1000);
    }, 0);
  }
  startTimer(10);

  return (
    <div className="text-center flex flex-col justify-center items-center text-white">
      <div className="inline-block text-white">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 42 42"
          className="donut text-white"
        >
          <circle
            id="c1"
            cx="21"
            cy="21"
            r="15.91549430918954"
            strokeDasharray="100 0"
            strokeDashoffset="100"
          ></circle>
          <circle
            id="c2"
            cx="21"
            cy="21"
            r="15.91549430918954"
            strokeDasharray="0 100"
            strokeDashoffset="0"
          ></circle>
          <g className="chart-text text-white">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              id="counterText"
              className="text-white"
            >
              5
            </text>
          </g>
        </svg>
      </div>
      <p>
        Visualization is one of the best methods to begin the day’s preparation.
        Imagine being an officer. Let's begin.
      </p>
    </div>
  );
}
