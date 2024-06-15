import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";


function Serv() {

  return (
    <>
     <div id="services" className="about w-full h-[1100px] lg:h-[850px] p-10  ">
     <h1 className="text-center text-4xl lg:text-5xl font-semibold  "> Our <span className="text-[#02EEFE]">  Servives </span> </h1>
     <div className="w-full h-[95%] flex flex-col lg:flex-row  gap-5 xl:gap-28 items-center justify-center sm:p-10 xl:p-20 py-10  px-5  my-10 lg:my-0">

      <div className="w-full h-[60%]  ">
         <HiOutlineComputerDesktop className="text-7xl"/>
         <h1 className="text-3xl my-4">web desiner </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In inventore rerum minima exercitationem atque odio ad deserunt vitae provident! Molestias quas quod magnam cumque placeat velit amet corrupti illum labore.
      </div>
      <div className=" w-full h-[60%] ">
        <FaCode className="text-7xl"/>
        <h1 className="text-3xl my-4">web dev </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate.
      </div>
      <div className=" w-full h-[60%] ">
        <MdOutlinePhoneAndroid className="text-7xl" />
        <h1 className="text-3xl my-4">App dev </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate.
      </div>

     </div>
     </div>
    </>
  );
}
export default Serv;
