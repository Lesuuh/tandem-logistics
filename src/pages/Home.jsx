import { useState } from "react";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { OurServices } from "../components/OurServices";
import { WhyChoseUs } from "../components/WhyChoseUs";
import { Banner2 } from "../components/Banner2";
import { Testimonials } from "../components/Testimonials";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full">
      <Navbar menu={menu} toggleMenu={() => setMenu(!menu)} />
      {/* {menu && <div className="overlay" onClick={()=> setMenu(!menu)}></div>} */}
      <Hero />
      <Banner/>
      <OurServices/>
      <WhyChoseUs/>
      <Banner2/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  );
};
