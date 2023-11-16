import { MdApartment, MdBikeScooter } from "react-icons/md";
import { PiVanBold } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";

export const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      icon: <MdApartment />,
      title: "Relocation and Logistics",
      desc: "Effortless moves and streamlined supply chains. Our expert team ensures smooth transitions with precision and efficiency. Trust us for reliable, customer-centric solutions that redefine your journey—one step at a time. Welcome to logistics excellence.",
    },
    {
      id: 2,
      icon: <MdBikeScooter />,
      title: "Courier and Delivery",
      desc: "Swift, secure, and tailored to you. From same-day local to global shipments, we redefine courier excellence. Trust us for seamless, efficient, and dependable deliveries—your packages in capable hands. Welcome to hassle-free courier solutions.",
    },

    {
      id: 3,
      icon: <PiVanBold />,
      title: "Transportation Services",
      desc: "Efficient, reliable, and cost-effective transportation solutions to propel your business forward. From local to global logistics, we optimize your supply chain with safety and precision. Trust us for a streamlined journey, delivering success on every route. Welcome to excellence in transportation services.",
    },
    {
      id: 4,
      icon: <FaCarSide />,
      title: "Car rental,sales & pick-up",
      desc: "Effortless mobility with our one-stop car solution. Whether you need to rent, buy, or get picked up, we've got you covered. Enjoy convenience and choice with our reliable car services. Welcome to seamless car solutions tailored just for you.",
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-center text-2xl  my-20 lg:my-[149px] md:text-3xl lg:text-4xl">
        Our Services
      </h1>
      <div className=" px-5  sm:grid sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {servicesData.map((card) => {
          return (
            <div key={card.id} className="rounded-[5px] hover:bg-orange hover:text-white group my-5 py-5 px-[10px] text-center border border-solid border-black bg-white shadow flex flex-col justify items-center">
              <div className="text-orange text-6xl group-hover:text-white">{card.icon}</div>
              <h2 className="text-xl font-bold py-[10px]">{card.title}</h2>
              <p className="text-[15px]  font-medium">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
