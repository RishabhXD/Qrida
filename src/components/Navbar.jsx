import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          <img
            src="https://media.discordapp.net/attachments/1088927203477172328/1088927331831255131/qrida.png?width=625&height=625"
            alt=""
            className="w-full h-full"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"> </div>
      <div className="navbar-end">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/qrida.club/"
            target="_blank"
            className="cursor-pointer hover:text-red-500"
          >
            <AiOutlineInstagram fontSize={25} />
          </a>
          <a
            href="https://chat.whatsapp.com/H7ebazxtviU0ppEUwMT06C"
            target="_blank"
            className="cursor-pointer hover:text-green-500"
          >
            <AiOutlineWhatsApp fontSize={25} />
          </a>
          <a
            href="https://t.me/qridaclub"
            target="_blank"
            className="cursor-pointer hover:text-blue-500"
          >
            <FaTelegramPlane fontSize={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
