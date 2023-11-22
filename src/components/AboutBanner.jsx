import { BsBuildings } from "react-icons/bs";
import { LuDoorOpen } from "react-icons/lu";
import { CiFaceSmile } from "react-icons/ci";
import { MdModeOfTravel } from "react-icons/md";

export const AboutBanner = () => {
  return (
    <div data-aos="fade-up" className=" mx-auto flex flex-wrap items-center justify-evenly mt-[83px] bg-gray w-full px-5 ">
      <div className="flex flex-col items-center gap-2 my-2">
        <BsBuildings className="text-orange text-2xl font-bold" />
        <h2 className="font-bold text-2xl">124+</h2>
        <h2 className="text-xl font-[500]">Homes Moved</h2>
      </div>
      <div className="flex flex-col items-center gap-2 my-2">
        <LuDoorOpen className="text-orange text-2xl font-bold" />
        <h2 className="font-bold text-2xl">234+</h2>
        <h2 className="text-xl font-[500]">Offices Moved</h2>
      </div>
      <div className="flex flex-col items-center gap-2 my-2">
        <CiFaceSmile className="text-orange text-2xl font-bold" />
        <h2 className="font-bold text-2xl">500+</h2>
        <h2 className="text-xl font-[500]">Happy Customers</h2>
      </div>
      <div className="flex flex-col items-center gap-2 my-2">
        <MdModeOfTravel className="text-orange text-2xl font-bold" />
        <h2 className="font-bold text-2xl">10,047+</h2>
        <h2 className="text-xl font-[500]">Kilometers Covered</h2>
      </div>
    </div>
  );
};
