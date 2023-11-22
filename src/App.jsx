import { Home } from "./pages/Home";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { About } from "./pages/About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
     // Only animate once
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar menu={menu} toggleMenu={() => setMenu(!menu)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
