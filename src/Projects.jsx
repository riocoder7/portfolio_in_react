import React, { useRef, useState } from 'react';
// Import Swiper React components
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
          <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            
            <img className='h-full w-full absolute rounded-lg bg-cente   ' src="public/Screenshot from 2024-04-13 19-34-20.png" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
        <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>
      
        <SwiperSlide>
        <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
        <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-green-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
        <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-green-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-green-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>


        
        <SwiperSlide>
        <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>


        <SwiperSlide>
           <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>



        <SwiperSlide>
        <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[55%] bg-center  bg-cover relative  shadow-md w-[95%] h-[30%] sm:h-[70%] 2xl:h-[85%]  bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

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
