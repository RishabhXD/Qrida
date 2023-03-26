import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

export default function Complete() {
  const navigate = useNavigate();
  const backToDistrict = () => {
    navigate("/prep");
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col items-center">
            <img src="/qrida.png" className="h-28 w-28" />
            <h1 className="font-bold text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Thank you for Participating
            </h1>
            <p className="pt-6 pb-6">
              We're also building a community of aspirants to study and prepare
              together. Join our community on
            </p>
            <button
              onClick={backToDistrict}
              className="btn border-none mb-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              <VscDebugRestart />
              Restart
            </button>
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
