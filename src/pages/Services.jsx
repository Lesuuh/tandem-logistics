import { DiverseServices } from "../components/DiverseServices";
import { Header } from "../components/Header";
import { ServicesBanner } from "../components/ServicesBanner";
import { ServicesProud } from "../components/ServicesProud";

export const Services = () => {
  const text = "Services"
  return (
    <div>
      <Header text={text} />
      <ServicesProud/>
      <DiverseServices/>
      <ServicesBanner/>
    </div>
  );
};
