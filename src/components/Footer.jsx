import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdCall, MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div  data-aos="fade-up" className="bg-orange h-auto lg:px-20 px-5 py-5 w-full mx-auto flex flex-col text-white md:flex-row md:justify-between md:items-start">
      <div className="md:w-[300px]">
        <h3 className="font-bold">Tandem</h3>
        <p className="my-3 text-[15px] font-medium italic">
          When you’re moving from your old house to a new location, there are
          thousands of things to betaken care of. We’ll be your assistants,
          helping you move all your belongings fast wherever you wish.
        </p>
        <div className="flex gap-5 my-3">
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
        </div>
      </div>
      <div className="my-3">
        <h3 className="font-bold">Quick Links</h3>
        <Link to="/">
          <p className="font-thin text-[15px] my-2 cursor-pointer">Home</p>
        </Link>
        <Link to="/about">
          <p className="font-thin text-[15px] my-2 cursor-pointer">About</p>
        </Link>
        <Link to="/services">
          <p className="font-thin text-[15px] my-2 cursor-pointer">Services</p>
        </Link>
        <Link to="/contact">
          <p className="font-thin text-[15px] my-2 cursor-pointer">
            Contact Us
          </p>
        </Link>
      </div>
      <div className="my-3">
        <h3 className="font-bold">Services</h3>
        <p className="font-thin text-[15px] my-2">Trucking & Haulage</p>
        <p className="font-thin text-[15px] my-2">Relocation & Logistics</p>
        <p className="font-thin text-[15px] my-2">Car rental</p>
        <p className="font-thin text-[15px] my-2">Courier services</p>
      </div>
      <div className="my-3">
        <h3 className="font-bold">Contact Us</h3>
        <p className="font-thin text-[15px] flex gap-2 items-center my-2">
          <MdOutlineLocationOn /> Liberation Road, CA
        </p>
        <p className="font-thin text-[15px] flex gap-2 items-center my-2">
          <MdCall /> +1-234-456-789
        </p>
        <p className="font-thin text-[15px] flex gap-2 items-center my-2">
          <MdEmail /> info@tandem.com
        </p>
      </div>
    </div>
  );
};
