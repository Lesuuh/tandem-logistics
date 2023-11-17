import heroImage from "/images/delivery-1 1.png";
import { Background } from "./Background";

export const Hero = () => {
  return (
    <div className="h-auto gradient-bg mt-10 px-5 md:px-10 lg:px-0 flex flex-col w-full bg-green lg:max-w-[1100px] lg:mx-auto lg:grid grid-cols-2 items-center">
      <div className="">
        <h2 className="text-4xl lg:text-5xl font-[700]">
          We can move you everywhere.{" "}
          <span className="text-orange ">Fast and Easily</span>
        </h2>
        <p className="mt-5 font-bold">
          Elevate Your Logistics Experience: Effortless Solutions, Seamless
          Deliveries, Limitless Possibilities!
        </p>
        <button className="mt-5 px-3 py-2 rounded-xl bg-orange text-white">
          Book Now
        </button>
      </div>
      <div>
        <img src={heroImage} alt="" />
      </div>
      <Background />
    </div>
  );
};
