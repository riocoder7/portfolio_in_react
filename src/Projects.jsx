import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Projects() {
  const [value, setvalue] = useState(false)
  console.log(value);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        <SwiperSlide id='projects' >
          <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} class="sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.20 AM.jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>
        
        </SwiperSlide>
      
        <SwiperSlide>
          <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>
        </SwiperSlide>


        <SwiperSlide>   
        <div  onMouseEnter={()=>setvalue(true)}  onMouseLeave={()=>setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
          <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
          <div  className={value== false?'w-[100%] h-[100%] absolute   hidden': 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '  }   > 
          sarfaraz</div>
        </div>
        </SwiperSlide>


        <SwiperSlide>       
        <div  onMouseEnter={()=>setvalue(true)}  onMouseLeave={()=>setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
          <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
          <div  className={value== false?'w-[100%] h-[100%] absolute   hidden': 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '  }   > 
          sarfaraz</div>
        </div>
        </SwiperSlide>


        <SwiperSlide>   
        <div  onMouseEnter={()=>setvalue(true)}  onMouseLeave={()=>setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
          <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
          <div  className={value== false?'w-[100%] h-[100%] absolute   hidden': 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '  }   > 
          sarfaraz</div>
        </div>
        </SwiperSlide>


        <SwiperSlide>        
        <div  onMouseEnter={()=>setvalue(true)}  onMouseLeave={()=>setvalue(false)} class="  sm:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[50%]   relative  shadow-md w-[95%] h-[75%] bg-red-500 rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
          <img className='h-full w-full bg-cover absolute rounded-lg bg-center' src="public/WhatsApp Image 2024-05-10 at 7.38.19 AM (1).jpeg" alt="image " />
          <div  className={value== false?'w-[100%] h-[100%] absolute   hidden': 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '  }   > 
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
