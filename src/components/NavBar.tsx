import React from "react";
import { FaRegStar } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
function NavBar() {
  return (
    <header className=" flex  flex-row shadow-md  p-2">
      <div className="flex flex-row items-center justify-between w-1/2 ">
        <h2 className="text-semibold text-xl">Welcome Board</h2>
        <div className="bg-blue-400 p-1 rounded-sm">
          <FaRegStar size={32} />
        </div>
        <div className="bg-blue-400 p-1 rounded-sm hover:cursor-pointer hover:px-5 transition-all duration-200 ease-in-out hover:bg-green-500 ">
          Personal
        </div>
        <div className="bg-blue-400 p-1 rounded-sm flex flex-row items-center gap-2">
          <AiFillLock />
          <span>Private</span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end w-1/2 space-x-3">
        <div className="bg-blue-400 hover:cursor-pointer hover:pl-5 hover:bg-green-500 transition-all duration-200 ease-in-out p-1 flex hover:gap-3 flex-row gap-2 items-center rounded-sm">
          <IoIosHome />
          <span> Home</span>
        </div>
        <div className="bg-blue-400 p-1 rounded-sm">- show menu</div>
      </div>
    </header>
  );
}

export default NavBar;
