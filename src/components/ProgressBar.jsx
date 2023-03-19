import React from "react";
import "../css/progress.css";

export default function ProgressBar() {
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
          window.location.href = "http://127.0.0.1:5173/tasks";
          return;
        }
        k = (i / duration) * 100;
        l = 100 - k;
        document.getElementById("c1").style.strokeDasharray = [l, k];
        document.getElementById("c2").style.strokeDasharray = [k, l];
        document.getElementById("c1").style.strokeDashoffset = l;
        console.log(k, l);
        document.getElementById("counterText").innerHTML = duration + 1 - i;
        i++;
      }, 1000);
    }, 0);
  }
  startTimer(10);

  return (
    <div className="hero min-h-screen bg-base-200 w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center">
          <div class="inline-block">
            <svg width="100px" height="100px" viewBox="0 0 42 42" class="donut">
              <circle
                id="c1"
                cx="21"
                cy="21"
                r="15.91549430918954"
                stroke-dasharray="100 0"
                stroke-dashoffset="100"
              ></circle>
              <circle
                id="c2"
                cx="21"
                cy="21"
                r="15.91549430918954"
                stroke-dasharray="0 100"
                stroke-dashoffset="0"
              ></circle>
              <g class="chart-text">
                <text
                  x="50%"
                  y="50%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  id="counterText"
                >
                  5
                </text>
              </g>
            </svg>
          </div>

          <p>
            To begin the day’s preparation, close your eyes and imagine.
            Visualization is one of the best techniques to begin your day’s
            preparation...
          </p>
        </div>
      </div>
    </div>
  );
}
