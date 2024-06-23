import React, { useRef, useState } from 'react';
import ProjectsProps from "./ProjectsProps";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Projects() {
  const [value, setvalue] = useState(false)
 
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  useGSAP(()=>{
    gsap.from(".swiper-slide",{
      x:200,
      y:-200,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".swiper-slide",
        scroller:"body",
        start:"top 20%",
        // markers:true

      }
      
    })
   
  })
  return (
    <>
      <Swiper id="projects"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,



        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper "
      >
        <SwiperSlide>
         <ProjectsProps image="public/person_icon.png"/>
        </SwiperSlide>
        
        <SwiperSlide>
        <ProjectsProps image="public/Screenshot from 2024-04-13 19-34-20.png"/>
        </SwiperSlide>
      
       <SwiperSlide>
       <ProjectsProps image="public/img2.jpeg"/>
       </SwiperSlide>

        <SwiperSlide>
        <ProjectsProps image="public/Screenshot from 2024-04-13 19-34-20.png"/>
        </SwiperSlide>

        <SwiperSlide>
        <ProjectsProps image="public/img1.jpeg"/>
        </SwiperSlide>


        <SwiperSlide>
        <ProjectsProps image="public/Screenshot from 2024-04-13 19-34-20.png"/>
        </SwiperSlide>


        
        <SwiperSlide>
        <ProjectsProps image="public/img1.jpeg"/>

        </SwiperSlide>


        <SwiperSlide>
        <ProjectsProps image="public/Screenshot from 2024-04-13 19-34-20.png"/>

        </SwiperSlide>



        <SwiperSlide>
        <ProjectsProps image="public/img1.jpeg"/>

        </SwiperSlide> 


        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle className='bg-white' cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
