// import React from "react";

import Navbar from "./Navbar";

import Services from "./Services";
import Projects from "./Projects";
// import Slider from "./Slider";
import Footer from "./Footer";
import Contactus from "./ContactUs";

function App() {
  return (
    <>
      <div className="  text-white bg-[#0D1226] scroll-smooth">
        <Navbar />
       
        <Services />
        <h1 className="text-center text-5xl my-20 font-semibold text-[#02EEFE]">Projects</h1>
        <Projects/>
        <Contactus />
        <Footer />
       
      </div>
      
    </>
  );
}

export default App;