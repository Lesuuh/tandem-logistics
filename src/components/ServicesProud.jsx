import img from "/images/victoria-kubiaki-t0Aio60jD4Q-unsplash 1.png";
import { Background } from "./Background";

export const ServicesProud = () => {
  return (
    <div className="max-w-[1100px] w-full mx-auto px-5 my-[157px] flex gap-[100px] flex-col md:flex-row">
      <Background />
      <div data-aos="fade-right" className="md:w-[400px]">
        <h1 className="font-bold text-2xl">
          Proud to deliver excellent services all the time
        </h1>
        <p className="md:mt-[53px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea consequat.
        </p>
      </div>
      <div className="">
        <img data-aos="fade-left" src={img} alt="service proud img" />
      </div>
    </div>
  );
};
