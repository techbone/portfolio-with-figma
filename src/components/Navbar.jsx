import React from "react";

const Navbar = () => {
  return (
    <div className="flex  justify-end items-center h-[66px] w-screen bg-black">
      <ul className="flex w-[637px] h-[46px] text-white gap-[5rem] items-center font-serif  ">
        <li className="hover:cursor-pointer ">About me</li>
        <li className="hover:cursor-pointer ">Skills</li>
        <li className="hover:cursor-pointer ">Portfolio</li>
        <button className="bg-white  text-black rounded-[30px] font-bold text-[15px] flex items-center p-1.5 ">
          CONTACT ME
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
