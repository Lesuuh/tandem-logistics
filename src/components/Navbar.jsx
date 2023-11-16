// import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export const Navbar = ({ menu, toggleMenu }) => {
  // const menuClass = menu ? "left-0" : "-left-96";

  return (
    <div>
      <nav
        className={` bg-${
          menu ? "white" : ""
        } px-5 relative flex justify-between items-center h-[80px] lg:max-w-[1100px] lg:mx-auto z-1000`}
      >
        <div className="text-orange font-bold cursor-pointer">Tandem</div>
        {
          <div className="hidden md:flex flex-row items-center">
            <ul className="md:flex flex-row items-center justify-center">
              <li className="mr-[42px] font-bold">Home</li>
              <li className="mr-[42px] font-bold">About us</li>
              <li className="mr-[42px] font-bold">Services</li>
              <li className="mr-[42px] font-bold">Contact us</li>
              <button className="px-3 py-2 rounded-xl bg-orange text-white inline-block">
                Book Now
              </button>
            </ul>
          </div>
        }
        {menu === false ? (
          <RiMenu3Line
            className="text-2xl cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        ) : (
          <IoClose
            className="text-2xl cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* mobile screen */}
        {menu && (
          <div
            className={`md:hidden ${menu ? "left-0": "left-10"} absolute top-[80px] px-5 bg-white w-full h-[100vh]  ease duration-700`}
          >
            <ul className="h-[100vh]  overflow-y-auto">
              <li className=" py-3 font-bold">Home</li>
              <li className="py-3 font-bold">About us</li>
              <li className=" py-3 font-bold">Services</li>
              <li className=" py-3 font-bold">Contact us</li>

              <button className="px-3 py-2 rounded-xl bg-orange text-white">
                Book Now
              </button>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
