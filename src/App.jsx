// import React from "react";

import Navbar from "./Navbar";

import Services from "./Services";
import Projects from "./Projects";
// import Slider from "./Slider";
import Footer from "./Footer";
import Contactus from "./ContactUs";
import About from "./About";
function App() {
  return (
    <>
      <div className="  text-white bg-[#0D1226] w-full scroll-smooth font-mono overflow-hidden">
        <Navbar />
       <About/>
        <Services />
        
        <h1 id="projects" className="text-center text-5xl my-20  font-semibold text-[#02EEFE]">Projects</h1>
        <Projects/>
        <Contactus />
        <Footer />
       
      </div>
      
    </>
  );
}

export default App;
