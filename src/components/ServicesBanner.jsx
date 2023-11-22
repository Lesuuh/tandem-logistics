import img from "/images/Rectangle 14.png";

export const ServicesBanner = () => {
  return (
    <div data-aos="fade-up"  className="relative w-full mx-auto my-5 h-[500px] sm:h-[600px] md:h-[700px] lg:h-full  py-5">
      <img src={img} alt="" className="bg-cover" />
      <div className="inset-0 bg-black opacity-80 absolute"></div>
      <div className="absolute  top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center px-1 text-white">
        <h1 className="text-xl md:text-4xl font-extrabold">
          Moving & Hiring Services
        </h1>
        <p className=" font-bold md:text-2xl mt-1 md:mt-3">
          Donec ac odio tempor orci dapibus ultrices in. Sit amet commodo nulla
          facilisi nullam vehicula. Tristique et egestas quis ipsum suspendisse
          ultrices gravida dictum.
        </p>
      </div>
    </div>
  );
};
