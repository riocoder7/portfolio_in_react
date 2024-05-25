import React from 'react'

function About() {
  return (

    <div className='font-mono '>
      <h1 className='text-center text-4xl font-semibold my-10'> <span className='text-[#02EEFE]'>About </span> Us</h1>
    <div className='w-full h-[120vh] sm:h-[750px] lg:h-[500px] lg:flex border border-red-500 '>
      

        <div className='w-full h-[70%] md:h-[60%] lg:w[60%] lg:h-full px-7 text-md   md:px-20  py-5  '>
          <h1 className='sm:text-2xl text-1xl my-6'>About Me.</h1>
          
          <p className='sm:text-xl '><span  className='hover:underline hover:text-[#7a7878] hover:text-1xl  font-semibold'>  Hi, I'm Sarfaraz Aalam,</span> a passionate designer, developer, and problem-solver with a love for creating innovative solutions.</p>
          <div className='bio my-5 sm:text-xl'>
            <p>With a background in designing, <span className='font-extrabold font-sans hover:underline'>  Web development, and Mobile app developmen </span>. I hold a degree in software engineering from <span className='underline font-extrabold'>  Mumbai University </span>  and have worked with various clients on projects ranging from branding to web applications and mobile apps.</p>

          </div>

          <p className='sm:text-xl'>When I'm not designing or coding, you can find me hiking, experimenting with new recipes in the <span className='font-extrabold'>  kitchen, </span> or exploring the latest <span className='font-extrabold'> tech trends </span>. 
</p>
        </div>


        <div className='w-full h-[30%] md:h-[40%] lg:w[40%] lg:h-full flex items-center justify-center  overflow-hidden '>
           <div className='w-80 h-80  rounded-full  overflow-hidden bg-cover object-cover'>
            <img className='w-full h-full  ' src="https://www.freeiconspng.com/uploads/computer-user-icon-13.png" alt="" />
           </div>
        </div>
    </div>

    </div>
  )
}

export default About