import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-white border-t-2 text-blac">
      <div>
        <img
          width="50"
          height="50"
          src="https://media.discordapp.net/attachments/1088927203477172328/1088927331831255131/qrida.png?width=625&height=625"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        />

        <p>
          Qrida
          <br />
          UPSC Aspirants Starting-Up
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-8">
          <a
            href="http://"
            target="blank"
            className="cursor-pointer hover:text-red-500"
          >
            <AiOutlineInstagram fontSize={25} />
          </a>
          <a
            href="http://"
            target="blank"
            className="cursor-pointer hover:text-green-500"
          >
            <AiOutlineWhatsApp fontSize={25} />
          </a>
          <a
            href="http://"
            target="blank"
            className="cursor-pointer hover:text-blue-500"
          >
            <FaTelegramPlane fontSize={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
