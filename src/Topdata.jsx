import React from "react";
import { MdOutlineDensitySmall } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

import SocialMedia from "./SocialMedia";

function Topdata() {
  return (
    <>
      <div className="  2section w-full h-[800px] lg:h-[520px]  gap-5 lg:flex-row  flex flex-col ">
        <div className="w-full h-[400px] lg:w[50%] lg:h-full lg:p-16    p-8 ">
          <h2 className="text-xl font-light ">Hellow, I`m</h2>
          <h1 className="text-4xl font-bold text my-1">Sarfaraz alam </h1>
          <h1 className="text-2xl font-medium leading-9 text my-2 ">
            Full stack Web Developments
          </h1>
          <div className="flex gap-4">
            <a href="/">sarfaraz alama </a> <TbExternalLink />
          </div>

          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            mollitia maiores corrupti praesentium, natus cumque ducimus tempore
            itaque quaerat modi dicta nostrum excepturi eveniet, suscipit magni
            saepe possimus iusto?
          </p>
          {/* <div className=" text-xl flex gap-5 my-7 flex-wrap ">
            <div className="rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE] ">
              <a href="https://www.instagrame.com/rio.coder">
                {" "}
                <SlSocialInstagram className="text-[#02EEFE]  hover:text-[#2c7878] " />{" "}
              </a>
            </div>
            <div className="rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE] ">
              <a href="https://www.twitter.com/riocoder">
                {" "}
                <BsTwitterX className="text-[#02EEFE] hover:text-[#2c7878] " />
              </a>
            </div>
            <div className="rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE] ">
              <a href="https://www.facebook.com/riocoder">
                {" "}
                <FaFacebook className="text-[#02EEFE] hover:text-[#2c7878] " />
              </a>
            </div>

            <div className="rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE]  ">
              <a href="https://www.github.com/riocoder7">
                <ImGithub className="text-[#02EEFE] hover:text-[#2c7878] " />
              </a>
            </div>

            <div className="rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE]">
              <a href="https://www.github.com/riocoder7">
                <FaLinkedinIn className="text-[#02EEFE] hover:text-[#2c7878]  " />
              </a>
            </div>
          </div> */}
          <SocialMedia/>
        </div>
        <div className="w-full h-[400px] lg:w[50%] lg:h-full  lg:px-38 2xl:px-48 md:px-44   p-8 box-border">
          <img
            className="w-full h-full bg-cover "
            src="https://www.freeiconspng.com/uploads/computer-user-icon-13.png"
            // src="https://www.freeiconspng.com/uploads/computer-user-icon-27.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Topdata;
