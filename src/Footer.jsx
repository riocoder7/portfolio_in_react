import React, { useRef } from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SocialMedia from './SocialMedia';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function Footer() {


  
  useGSAP(()=>{
  
   
    gsap.from(".home ,.contact, .project",{
      x:-100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".links",
        scroller:"body",
        start:"top 90%",
        // markers:true,
    },


    }),
    gsap.from(".whatsapp, .gmail",{
      x:100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".links",
        scroller:"body",
        start:"top 90%",
        // markers:true,
    },


    }),
    gsap.from(".footer_media, .copyright",{
      y:-100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".links",
        scroller:"body",
        start:"top 90%",
        // markers:true,
    },


    })


  })
  return (
<>
<div className=' relative w-full h-60  bg-[#030A16] flex justify-center overflow-hidden'>
  <div className='w-full lg:w-[50%] h-full my-16 sm:my-0' >
    
       <span className=' footer_media flex justify-center w-f m-auto '>
         <SocialMedia /> 
       </span>
     
     <div className='links flex justify-center text-sm  sm:gap-5 lg:gap-28 xl:gap-44 sm:text-xl sm:my-10 font-semibold  md:gap-20 gap-5'>
      <a className='home' href="#navbar">Home </a>
      <a className='about' href="#about"> About </a>
      <a className='contact' href="#contactus">Contacts </a>
      <a className='project' href="#projects">Projects </a>
      <a className='project' href="#services">services </a>
     </div>
      
          
  </div>

  <div className='whatsapp absolute w-16 h-16 rounded-full    p-2  text-green-500 right-10'>
    <a className='w-full h-full overflow-hidden text-5xl   flex justify-center'  href="https://wa.me/917547859843/?text=Hi Sam, Whatsup">
      <FaWhatsappSquare/>
    </a>
  </div>

  <div className='gmail  absolute w-16 h-16 rounded-full top:0  sm:top-32 sm:right-10 right-60'>
    <a className='w-full h-full overflow-hidden text-6xl  rounded-full flex justify-center' href="mailto:someone@example.com">
      <IoIosMail />
    </a>
  </div>
</div>

<div className=' copyright w-full h-14 bg-[#000000] text-center flex items-center justify-center'>
  <h1> Copyright ©2024-25 ....   Designed by Rio.code </h1>
</div>
</>   

  )
}

export default Footer