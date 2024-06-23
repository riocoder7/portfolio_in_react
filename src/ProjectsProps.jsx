import React, { useRef, useState } from 'react'

function ProjectsProps({image}) {
  const [value, setvalue] = useState(false)
  return (
    <div onMouseEnter={() => setvalue(true)} onMouseLeave={() => setvalue(false)} className="sm:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[70%] bg-center  bg-cover relative  shadow-md w-[95%] h-[65%] md:w-[95%] sm:h-[60%] 2xl:h-[85%]  rounded-lg shadow-blue-600/200 hover:scale-100 hover:-translate-y-6 hover:duration-700 ">
            
            <img className='h-full w-full absolute rounded-lg bg-cente   ' src={image} alt="image " />
            <div className={value == false ? 'w-[100%] h-[100%] absolute   hidden' : 'w-[100%] h-[100%] absolute   bg-black opacity-60     rounded-lg block '}   >
              sarfaraz</div>
          </div>
  )
}

export default ProjectsProps