import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

export default function Complete() {
  const navigate = useNavigate();
  const backToDistrict = () => {
    navigate("/progress");
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col items-center">
            <img src="/qrida.png" className="h-28 w-28" />
            <h1 className="font-bold text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Thank you for Participating.
            </h1>
            <p className="pt-6 pb-6">
              Open your preparation books if this conversation helped you focus
            </p>
            <div className="divider mb-6 pb-6">OR</div>
            <button
              onClick={backToDistrict}
              className="btn border-none mb-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              <VscDebugRestart />
              Start a new conversation!
            </button>
            <p className="pt-6 pb-6">
              We're building India's first technology startup by aspirants for aspirants while taking inspiration from the civil services preparation journey.
            </p>

            <div>
              <a
                className="btn btn-ghost hover:text-red-500"
                href="https://www.instagram.com/qrida.club/"
                target="_blank"
              >
                <AiOutlineInstagram fontSize={25} />
              </a>
              <a
                className="btn btn-ghost hover:text-green-500"
                href="https://chat.whatsapp.com/H7ebazxtviU0ppEUwMT06C"
                target="_blank"
              >
                <AiOutlineWhatsApp fontSize={25} />
              </a>
              <a
                className="btn btn-ghost hover:text-blue-500"
                href="https://t.me/qridaclub"
                target="_blank"
              >
                <FaTelegramPlane fontSize={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
