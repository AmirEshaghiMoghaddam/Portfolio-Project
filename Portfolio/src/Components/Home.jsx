import React from "react";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import MyWork from "./MyWork/MyWork";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
