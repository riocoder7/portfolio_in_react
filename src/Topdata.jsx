import React, { useRef } from "react";
import { MdOutlineDensitySmall } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

import SocialMedia from "./SocialMedia";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Topdata({timeline}) {

  
 
  useGSAP(()=>{
    const t2 = gsap.timeline();
    t2.from(".hi,.name,.profisnal,.btn,.about",{
      x:-50,
      duration:2,
      stagger:1,
      opacity:0,
      


    }),
    t2.from(".img",{
      y:-100,
      opacity:0,
      stagger:0,
      scale:4

    })
  })
  

  return (
    <>
      <div className="  section2 w-full h-[800px] lg:h-[700px] items-center   gap-5 lg:flex-row  flex flex-col ">
        
        <div  className=" w-full h-[400px] lg:w[50%] lg:h-[70%] lg:p-16    p-8 ">
          <h2  className="hi  text-xl font-light ">Hey Hi, I'm </h2>
          <h1  className="name text-4xl font-bold text my-1">Sarfaraz Aalam </h1>
          <h1  className="profisnal  text-2xl font-medium leading-9 text my-2 ">
            Full stack Web Developments
          </h1>
          
          <div className="btn flex gap-4">
            <a href="/">sarfaraz Aalam </a> <TbExternalLink />
          </div>

          <p className="about  my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            mollitia maiores corrupti praesentium, natus cumque ducimus tempore
            itaque quaerat modi dicta nostrum excepturi eveniet, suscipit magni
            saepe possimus iusto?
          </p>
          
          <SocialMedia  />
        </div>

        <div className="w-full h-[400px] lg:w[50%] lg:h-[70%]  bg-cover  my-20   lg:px-38 2xl:px-48 md:px-44   p-8 box-border">
          <img
            className="img  w-full h-full  "
            src="https://www.freeiconspng.com/uploads/computer-user-icon-13.png"
            // src="https://www.freeiconspng.com/uploads/computer-user-icon-27.png"
            alt=""
          />
      
      {/* <div className='w-80 h-80  rounded-full border border-yellow-400  overflow-hidden bg-cover object-cover'>
            <img className='w-full h-full  ' src="https://www.freeiconspng.com/uploads/computer-user-icon-13.png" alt="" />
           </div> */}

        </div>

      </div>
    </>
  );
}

export default Topdata;
