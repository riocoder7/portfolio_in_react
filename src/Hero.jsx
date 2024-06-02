import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import person from "../public/person_icon.png";


import SocialMedia from "./SocialMedia";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero({timeline}) {

  
 
  useGSAP(()=>{
    const t2 = gsap.timeline();
    t2.from(".hi,.name,.profisnal,.btn,.about",{
      x:-50,
      duration:2,
      stagger:1,
      opacity:0,
      


    }),
    gsap.from(".img",{
      y:-100,
      delay:5,
      opacity:0,
      stagger:0,
      scale:4

    })
  })
  

  return(
    <>
      <div className=" section2 w-full h-[950px] lg:h-[700px] items-center   gap-5 lg:flex-row  flex flex-col ">
        
        <div  className=" w-full h-[400px] lg:w[50%] lg:h-[70%] lg:p-16 p-8 ">
          <h2  className="hi  text-xl   ">Hey Hi, I'm </h2>
          <h1  className="name text-3xl md:text-4xl font-bold text sm:my-5 ">Sarfaraz Aalam | </h1>
          <h1  className="profisnal  text-[18px] font-medium  text my-1 md:my-2">
            Full stack Web & App Developer
          </h1>
          
          <p className="about  my-5">
          I'm a motivated and enthusiastic individual with a passion for web development and App development. I'm excited to apply my skills and creativity to build innovative digital solutions.

          </p>


          <div className="btn flex gap-4 w-56 justify-center cursor-pointer lg:my-10  h-12 items-center rounded-lg text-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <a href={""} download="sarfraz_alam_resume">Download CV </a><FaDownload />
          </div>
          <SocialMedia  />
        </div>
      
        

         {/* <div className=" border border-purple-400 w-full h-[500px] sm:px-32 sm:py-20 sm:my-0 lg:w[50%] lg:h-[70%]  bg-cover  my-10  lg:px-20 2xl:px-48 md:px-25   box-border">
          <img
            className="img  object-cover w-full h-full border border-red-700  "
            src="https://www.freeiconspng.com/uploads/computer-user-icon-13.png"
            
            alt="image"
          />
      
    

        </div>  */}
    
        
    <div className=' my-10 w-full h-[50%] md:h-[40%] lg:w[40%] lg:h-full flex items-center  justify-center  overflow-hidden '>
           <div className='w-80 h-80  rounded-full  overflow-hidden bg-cover object-cover'>
            <img className=' img w-full h-full  ' src={person} alt="" />
           </div>
        </div>
        

      </div>
    </>
  );
}

export default Hero;
