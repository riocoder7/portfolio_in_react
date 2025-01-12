import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { MdOutlineDensitySmall } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {

  return (
    <div className="social text-xl flex gap-5 my-7 flex-wrap curr ">
            <div className="instagrame rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE] ">
              <a href="https://www.instagrame.com/rio.coder">
                {" "}
                <SlSocialInstagram className="text-[#02EEFE]  hover:text-[#2c7878] " />{" "}
              </a>
            </div>

            <div className="twitter rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE] ">
              <a href="https://www.twitter.com/riocoder">
                {" "}
                <BsTwitterX className="text-[#02EEFE] hover:text-[#2c7878] " />
              </a>
            </div>

            <div className=" facebook rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE] ">
              <a href="https://www.facebook.com/riocoder">
                {" "}
                <FaFacebook className="text-[#02EEFE] hover:text-[#2c7878] " />
              </a>
            </div>

            <div className="github rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE]  ">
              <a href="https://www.github.com/riocoder7">
                <ImGithub className="text-[#02EEFE] hover:text-[#2c7878] " />
              </a>
            </div>

            <div className="linkedin rounded-full p-2 w-10 h-10 flex justify-center items-center border border-[#02EEFE]">
              <a href="https://in.linkedin.com/in/rio-coder-2a662823b">
                <FaLinkedinIn className="text-[#02EEFE] hover:text-[#2c7878]  " />
              </a>
            </div>
          </div>
  )
}
