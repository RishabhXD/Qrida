import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export default function Complete() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-bold text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Thank you for Participating
            </h1>
            <p className="pt-6 pb-6">
              We're also building a community of aspirants to study and prepare
              together. Join our community on
            </p>
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
    </>
  );
}
