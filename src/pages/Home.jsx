import { Hero } from "../components/Hero";

import { Banner } from "../components/Banner";
import { OurServices } from "../components/OurServices";
import { WhyChoseUs } from "../components/WhyChoseUs";
import { Banner2 } from "../components/Banner2";
import { Testimonials } from "../components/Testimonials";
import { Faq } from "../components/Faq";

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Banner />
      <OurServices />
      <WhyChoseUs />
      <Banner2 />
      <Testimonials />
      <Faq />
    </div>
  );
};
