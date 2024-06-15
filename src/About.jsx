import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import React from 'react';
import person from "../public/person_icon.png";

gsap.registerPlugin(ScrollTrigger) ;

function About() {

  useGSAP(()=>{
    
    gsap.from(".tittle",{
      y:-50,
      stagger:1,
      opacity:0,
      scale:4,
      scrollTrigger:{
        trigger:".tittle",
        scroller:"body",
        start:"top 80%",
        // markers:true,
    },
      
    }),
    gsap.from(".subtittle, .pragraph1",{
      x:-50,
      stagger:0.5,
      opacity:0,
      scrollTrigger:{
        trigger:".subtittle, .pragraph1",
        scroller:"body",
        start:"top 50%",
        // markers:true,
    },
      
    }),

    gsap.from(".pragraph2 , .pragraph3",{
      x:50,
      duration:2,
      stagger:1,
      opacity:0,
      scrollTrigger:{
        trigger:".pragraph2 , .pragraph3",
        scroller:"body",
        start:"top 70%",
        // markers:true,
    },
      
    }),

    gsap.from(".pragraph4",{
      y:-80,
      duration:2,
      stagger:1,
      opacity:0,
      scrollTrigger:{
        trigger:".pragraph4",
        scroller:"body",
        start:"top 70%",
        // markers:true,
    },
    })


  })
  return (

    <div id='about' className='about font-mono overflow-hidden '>
      <h1 className='tittle text-center text-4xl font-semibold my-10'> <span className=' text-[#02EEFE]'>About </span> Us</h1>
    <div className='w-full h-[120vh] sm:h-[750px] lg:h-[500px] lg:flex  '>

      

        <div className='aboutus w-full h-[70%] md:h-[60%] lg:w[60%] lg:h-full px-7 text-md   md:px-20  py-5  '>
          <h1 className='subtittle sm:text-2xl text-1xl my-6'>About Me.</h1>
          
          <p className='pragraph1 sm:text-xl '><span  className='hover:underline hover:text-[#7a7878] hover:text-1xl  font-semibold'>  Hi, I'm Sarfaraz Aalam,</span> a passionate designer, developer, and problem-solver with a love for creating innovative solutions.</p>
          <div className='pragraph2 bio my-5 sm:text-xl'>
            <p>With a background in designing, <span className='font-extrabold font-sans hover:underline'>  Web development, and Mobile app developmen </span>. I hold a degree in software engineering from <span className='underline font-extrabold'> <a href="" target='_blank'>  Mumbai University </a></span>  and have worked with various clients on projects ranging from branding to web applications and mobile apps.</p>

          </div>

          <p className='pragraph3 sm:text-xl'>When I'm not designing or coding, you can find me hiking, experimenting with new recipes in the <span className='font-extrabold'>  kitchen, </span> or exploring the latest <span className='font-extrabold'> tech trends </span>. 
</p>
        </div>


        <div className='pragraph4 w-full h-[30%] md:h-[40%] lg:w[40%] lg:h-full flex items-center justify-center  overflow-hidden '>
           <div className='w-80 h-80  rounded-full  overflow-hidden bg-cover object-cover'>
            <img className='w-full h-full  ' src={person} alt="image" />
           </div>
        </div>
    </div>

    </div>
  )
}

export default About