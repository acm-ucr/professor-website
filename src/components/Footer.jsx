import React from "react";
import { FaEnvelope } from "react-icons/fa";
import home from "@/data/home";

const Footer = () => {
  return (
    <div className="w-full bg-professor-lightgray flex items-center justify-between">
      <div className="flex items-center">
        <FaEnvelope className="text-professor-blue text-4xl m-3" />
        <div className="flex flex-col m-2">
          <p className="p-0 m-0 text-sm text-black">Questions? Contact</p>
          <p className="p-0 m-0 text-sm font-bold text-black">{home.name}</p>
          <a
            className="p-0 m-0 text-sm no-underline text-professor-blue"
            href={`mailto:${home.email}`}
          >
            {home.email}
          </a>
        </div>
      </div>
      <img src="/bcoeLogo.png" className="w-1/5 mr-5" />
    </div>
  );
};

export default Footer;
