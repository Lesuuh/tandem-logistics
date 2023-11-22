import { BsBoxes } from "react-icons/bs";
import { FaBox, FaCalendar, FaShuttleVan } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

export const AboutBanner2 = () => {
  return (
    <div className="mx-auto max-w-[1100px] mt-[83px] bg-grey w-full px-5 py-5 ">
      <h1 className="font-bold text-2xl px-5">Moving Made Easy</h1>
      <div className="flex flex-wrap justify-evenly py-5 flex-col items-start gap-5 md:flex-row md:items-center">
        <div className="flex items-center gap-1">
          <FaCalendar  className="text-2xl text-orange"/>
          <p className="font-bold">Book our Service</p>
        </div>
        <MdArrowRightAlt />
        <div className="flex items-center gap-1">
          <BsBoxes  className="text-2xl text-orange"/>
          <p className="font-bold">We pack your goods</p>
        </div>
        <MdArrowRightAlt />
        <div className="flex items-center gap-1">
          <FaShuttleVan  className="text-2xl text-orange"/>
          <p className="font-bold">We move your goods</p>
        </div>
        <MdArrowRightAlt />
        <div className="flex items-center gap-1">
          <FaBox  className="text-2xl text-orange"/>
          <p className="font-bold">We unpack your goods</p>
        </div>
      </div>
    </div>
  );
};
