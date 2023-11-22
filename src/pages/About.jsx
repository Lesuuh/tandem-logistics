import { AboutBanner } from "../components/AboutBanner";
import { AboutBanner2 } from "../components/AboutBanner2";
import { AboutWelcome } from "../components/AboutWelcome";
import { Banner2 } from "../components/Banner2";
import { Header } from "../components/Header";
import { Vision } from "../components/Vision";

export const About = () => {
  const text = "About Us";
  return (
    <div>
      <Header text={text} />
      <AboutWelcome />
      <AboutBanner />
      <Vision />
      <AboutBanner2/>
      <Banner2/>
    </div>
  );
};
