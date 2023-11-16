import { useState } from "react";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";

export const Home = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full">
      <Navbar menu={menu} toggleMenu={() => setMenu(!menu)} />
      {/* {menu && <div className="overlay" onClick={()=> setMenu(!menu)}></div>} */}
      <Hero />
      <Banner/>
    </div>
  );
};
