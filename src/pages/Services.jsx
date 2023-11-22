import { DiverseServices } from "../components/DiverseServices";
import { Header } from "../components/Header";
import { ServicesBanner } from "../components/ServicesBanner";
import { ServicesBanner2 } from "../components/ServicesBanner2";
import { ServicesProud } from "../components/ServicesProud";

export const Services = () => {
  const text = "Services"
  return (
    <div >
      <Header text={text} />
      <ServicesProud/>
      <DiverseServices/>
      <ServicesBanner/>
      <ServicesBanner2/>
    </div>
  );
};
