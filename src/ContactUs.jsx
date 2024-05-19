import react from 'react'

const Contactus = ()=>{
    return (
   <div id='contactus' className=' w-full h-[850px] my-10    flex lg:justify-center xl:justify-center md:justify-center sm:px-10 2xl:justify-center  px-5 lg:py-5 font-serif'>
    <div className=' card w-full lg:w-[50%] md:w-[60%] 2xl:w-[50%] h-[95%] bg-[#171943]   rounded-lg  bg-blue shadow-black shadow-2xl lg:px-10 px-5 '>
        
        <span className='flex justify-center m-10 font-semibold text-4xl text-[#02EEFE] '> 
        <h1>Contact Us </h1>
        </span>

        <form action="" className=' text-black text-xl outline-0'>

        <span className=''>
        <h2 className='text-white py-2 '>NAME</h2>
        <input className='name w-full p-2 rounded-lg shadow-xl onenter:shadow-black   '  type="text" name="name" id="name" placeholder='enter your name  ' />
        </span>

           
        <span className=' my-4 p-10 '> 
        <h2 className='text-white py-2'>EMAIL</h2>
        <input className='name w-full p-2 rounded-lg shadow-xl onenter:shadow-black   '  type="email" name="name" id="name" placeholder='enter your name  ' />
        </span>

        <span className=' my-4 p-10 '> 
        <h2 className='text-white py-2'>NUMBER</h2>
        <input placeholder='enter you phone number ' className='name w-full p-2 rounded-lg shadow-xl onenter:shadow-black' type="number" name="phone" id="phone" />
        </span>

        <span className=' my-4 p-10 '> 
        <h2 className='text-white py-2 '>MEASSAGE</h2>
        <textarea placeholder='enter your message ' className='name w-full rounded-lg min-h-24 max-h-32 px-2' ></textarea>
        </span>
        
        <span className='flex justify-center'> 

         <button className='text-white my-10 rounded-xl w-full bg-[#2e28ed] p-2 flex justify-center' >submit</button>
        </span>
        </form>
    </div>
   </div>
    );


}

export default Contactus;
