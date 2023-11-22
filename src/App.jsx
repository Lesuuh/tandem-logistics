import { Home } from "./pages/Home";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { About } from "./pages/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

function App() {
  const [menu, setMenu] = useState(false);

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
