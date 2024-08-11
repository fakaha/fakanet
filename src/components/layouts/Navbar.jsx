import React from "react";
import logo from "../../assets/image/logo.svg"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <img className="w-[70px] hover:cursor-pointer" src={logo} />
      <ul className="flex gap-3">
        <a href='#' className="hover:bg-[#FF6F61] hover:text-[#fff] rounded-lg py-1 px-2 hover:cursor-pointer">
          Beranda
        </a>
        <a href="#kenapakami" className="hover:bg-[#FF6F61] hover:text-[#fff] rounded-lg py-1 px-2 hover:cursor-pointer">
          Kenapa Kami
        </a>
        <a href="#contact" className="hover:bg-[#FF6F61] hover:text-[#fff] rounded-lg py-1 px-2 hover:cursor-pointer">
          Kontak
        </a>
      </ul>
    </div>
  );
};
