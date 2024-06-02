import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import react, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"


const Contactus = ()=>{
   const [name, setName] = useState("");
   const [email ,  setEmail] = useState("");
   const [ number,  setNumber]= useState("");
   const [ message, setMessage] =  useState("");
   const form = useRef();
   

   

  
    const submit_form = (event)=>{
        event.preventDefault();
       
 
    emailjs
    .sendForm('service_989uqlv', 'template_tue907b', form.current, {
      publicKey: '_DnQq5M_BGAZ-az0s',
    })
    .then(
      () => {
        alert('SEND MESSAGE SUCCESSFULLY!');
      },
      (error) => {
        alert('FAILED..Something went wrong try agin ', error.text);
      },
    );
    
    setName("");
    setEmail("");
    setMessage("")
    setNumber("")
      }
    
    useGSAP(()=>{
    
        gsap.from(".contac",{
            y:100,
            opacity:0,
            scrollTrigger:{
                trigger:".contac",
                scroller:"body",
                start:"top 30%",
                // markers:true,
            }

        })
        
    })
    return (
   <div  id='contactus'  className='contac   w-full h-[850px] my-10  overflow-hidden  flex lg:justify-center xl:justify-center md:justify-center sm:px-10 2xl:justify-center  px-5 lg:py-5 '>
    <div className=' card w-full lg:w-[50%] md:w-[60%] 2xl:w-[50%] h-[95%] bg-[#171943]   rounded-lg  bg-blue shadow-black shadow-2xl lg:px-10 px-5 '>
        
        <span className='flex justify-center m-10 font-semibold text-4xl text-[#02EEFE] '> 
        <h1>Contact Us </h1>
        </span>

        <form ref={form} onSubmit={submit_form} className=' text-black text-xl outline-0'>

        <span className='name'>
        <h2 className='text-white py-2 '>NAME</h2>
        <input className='name w-full p-2 rounded-lg shadow-xl onenter:shadow-black focus:border-sky-500'  
        type="text"   id="name" placeholder='enter your name '
         name='user_name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        
        
        />
        </span>

           
        <span className=' email my-4 p-10 '> 
        <h2 className='text-white py-2'>EMAIL</h2>
        <input className='name w-full p-2 rounded-lg shadow-xl onenter:shadow-black' 
         type='email' name="user_email" id="email" placeholder='enter your name'
         value={email}
         onChange={e => setEmail(e.target.value)}
         />
        </span>

        <span className=' phone my-4 p-10 '> 
        <h2 className='text-white py-2'>NUMBER</h2>
        <input placeholder='enter you phone number ' className='name w-[100%] border border-red-500 p-2 rounded-lg shadow-xl onenter:shadow-black' 
        type='number' name="user_phone" id="phone" 
        value={number}
        onChange={e => setNumber(e.target.value)}
        />
        </span>

        <span className=' message my-4 p-10 '> 
        <h2 className='text-white py-2 '>MESSAGE</h2>
        <textarea placeholder='enter your MESSAGE '  className='name w-full rounded-lg min-h-24 max-h-32 px-2'
        name='message'
        value={message}
        onChange={e => setMessage(e.target.value)}
         ></textarea>
        </span>
        
        <span className=' btn flex justify-center '> 

         <button    className='text-white my-10 rounded-xl w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer p-2 flex justify-center' >SEND</button>
        </span>
        </form>
    </div>
   </div>
    );


}

export default Contactus;
