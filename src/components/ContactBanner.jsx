import { Background } from "./Background";

export const ContactBanner = () => {
  return (
    <div className=" max-w-[1100px] w-full mx-auto flex gap-5 px-5 flex-wrap items-center justify-between flex-col md:flex-row mt-[150px]">
      <Background />
      <div
        data-aos="fade-right"
        className="flex flex-col bg-white w-[250px] shadow-xl text-center px-2 rounded"
      >
        <h1 className="font-bold text-2xl">Office</h1>
        <p>Tandem Logistics P.O.Box AW 5784 Accra</p>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col  w-[250px] bg-white shadow-xl text-center px-2 rounded"
      >
        <h1 className="font-bold text-2xl">Call Us</h1>
        <p>+233-26837494</p>
      </div>
      <div
        data-aos="fade-down"
        className="flex flex-col  w-[250px] bg-white shadow-xl text-center px-2 rounded"
      >
        <h1 className="font-bold text-2xl">Mail us</h1>
        <p>info@tandem.com</p>
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col  w-[250px] bg-white shadow-xl text-center px-2 rounded"
      >
        <h1 className="font-bold text-2xl">Office hours</h1>
        <p>Mon-Fri: 08:00-05:00 & Sat: 08:00-02:00</p>
      </div>
    </div>
  );
};
