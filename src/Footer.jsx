import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SocialMedia from './SocialMedia';


function Footer() {
  return (
<>
<div className=' relative w-full h-60  bg-[#030A16] flex justify-center '>
  <div className='w-[50%] h-full ' >
    
       <span className='flex justify-center m-auto'>
         <SocialMedia /> 
       </span>
     
     <div className='flex justify-center  sm:gap-12 lg:gap-36 xl:gap-44 text-xl font-semibold  md:gap-20 gap-8'>
      <a href="#navbar">Home </a>
      <a href="#about">About </a>
      <a href="#contactus">Contacts </a>
      <a href="#projects">Projects </a>
     </div>
      
          
  </div>

  <div className='absolute w-16 h-16 rounded-full  p-2  text-green-500 right-10'>
    <a className='w-full h-full overflow-hidden text-5xl  rounded-full flex justify-center'  href="https://wa.me/917547859843/?text=Hi Sam, Whatsup">
      <FaWhatsappSquare/>
    </a>
  </div>
  <div className='absolute w-16 h-16 rounded-full  top-20 right-10'>
    <a className='w-full h-full overflow-hidden text-6xl  rounded-full flex justify-center' href="mailto:someone@example.com">
      <IoIosMail />
    </a>
  </div>
</div>

<div className='w-full h-14 bg-[#000000] flex justify-center items-center'>
  Copyright ©2024-25 ....  Designed by Rio.code
</div>
</>   

  )
}

export default Footer