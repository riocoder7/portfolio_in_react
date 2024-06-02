import React, { useState, useRef } from "react";
import { MdOutlineDensitySmall } from "react-icons/md";
import Hero from "./Hero";
import { RxCross1 } from "react-icons/rx";
import SocialMedia from "./SocialMedia";
import { IoIosMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import img1 from "../public/img1.jpeg";
import { FaDownload } from "react-icons/fa";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";



function navbar() {

  const [manuBtn, setmanuBtn] = useState(false);
  
  const manu_btn = () => {
    setmanuBtn(true)
    
    gsap.to(".link", 
    { 
      x:-100,
      duration:0.7,
      delay:2,


    });


    
  };

  const cross_btn = () => {
    setmanuBtn(false);

  }

  const logo = useRef();
  const home = useRef();
  const about = useRef();
  const contact = useRef();
  const projects = useRef();
  const service = useRef();

  

   useGSAP(()=>{
    const t1 = gsap.timeline();
    t1.from([logo.current,home.current,about.current,projects.current,contact.current, service.current],{
      y:-500,
      delay:0.5,
      duration:2,
      opacity:0,
      color:"green",
      stagger:0.2,

    
    })
    

   })

  return (
    <>
      <div id="navbar" className=" topbar w-full h-[950px] xl:h-screen overflow-hidden bg-[#030A16]">
        <div  className="navbar relative  w-full px-10 text-xl flex justify-between lg:justify-around items-center py-6">
          
          <div ref={logo} className="logo text-3xl ">Rio Coder </div>
          <div className="navbar lg:invisible  font-bold">
            <MdOutlineDensitySmall className="cursor-pointer" onClick={manu_btn} />
          </div>

          <div className=" hidden lg:flex lg:gap-16  font-bold ">
            <div ref={home}>
              <a  href="#home"> Home </a>
            </div>
            <div ref={about}>
              <a href="#about"> About </a>
            </div>
            <div ref={projects}>
              <a href="#projects"> Projects </a>
            </div>

            <div ref={contact}>
              <a href="#contactus"> Contact </a>
            </div >

            <div ref={service}>
              <a href="#projects"> Service </a>
            </div>
            
          </div>
          {
            manuBtn === false ? <div className="absolute  invisible  lg:invisible"> </div>
              : <div className="absolute w-[100%] sm:w-[50%] rounded-lg h-[900px] bg-[#030A16] z-50  right-0 top-0 lg:invisible">

                <div className="relative w-full ">
                  <RxCross1 onClick={cross_btn} className="absolute text-3xl right-9 top-5 cursor-pointer" />
                </div>


                <div className="link px-10 py-20 md:p-10  flex flex-col gap-10 ">
                  <div className="home">
                    <a href="#home"> Home </a>
                  </div>
                  <div>
                    <a href="#about"> About </a>
                  </div>
                  <div>
                    <a href="#projects"> Progects </a>
                  </div>
                  <div>
                    <a href="#contactus"> Contact Us </a>
                  </div>
                  
                  <div>
                    <a href="#projects"> Services </a>
                  </div>
                  
                  <div className="btn flex gap-4 w-56 justify-center cursor-pointer lg:my-10  h-12 items-center rounded-lg text-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                 <a href={""} download="sarfraz_alam_resume">Download CV </a><FaDownload />
                  </div>
                    

                  < SocialMedia />

                  <div className=' w-16 h-16 rounded-full  p-2  text-green-500 '>
                    <a className='w-full h-full overflow-hidden text-5xl  rounded-full flex justify-center' href="https://wa.me/917547859843/?text=Hi Sam, Whatsup">
                      <FaWhatsappSquare />
                    </a>
                  </div>
                  <div className=' w-16 h-16 rounded-full '>
                    <a className='w-full h-full overflow-hidden text-6xl  rounded-full flex justify-center' href="mailto:someone@example.com">
                      <IoIosMail />
                    </a>
                  </div>

                </div>


              </div>

          }


        </div>



        <Hero />
      </div>
    </>
  );
}

export default navbar;
