import { DiverseServiceCard } from "./DiverseServiceCard";
import { FaRegBuilding } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { FaShuttleVan } from "react-icons/fa";

export const DiverseServices = () => {
  const cardData = [
    {
      id: 1,
      icon: <FaRegBuilding />,
      title: "Office Relocation",
      text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
    },
    {
      id: 2,
      icon: <GiFamilyHouse />,
      title: "House Hold Moving",
      text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
    },
    {
      id: 3,
      icon: <FaShuttleVan />,
      title: "Transportation Services",
      text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
    },
    {
      id: 4,
      icon: <FaRegBuilding />,
      title: "Office Relocation",
      text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
    },
    {
      id: 5,
      icon: <GiFamilyHouse />,
      title: "HouseHold Moving",
      text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
    },
    {
      id: 6,
      icon: <FaShuttleVan />,
      title: "Transportation Services",
      text: "Nec nam aliquam sem et tortor. Nec sagittis aliquam malesuada bibendum arcu vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nisi est sit amet facilisis magna.",
    },
  ];
  return (
    <div className="max-w-[1100px] w-full mx-auto px-5 my-5">
      <h1 className="text-center font-bold text-2xl">
        We offer diverse services
      </h1>
      <div className="  flex gap-5 flex-col sm:grid sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-between mt-[85px] lg:gap-10">
        {cardData.map((item) => {
          return (
            <DiverseServiceCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};
