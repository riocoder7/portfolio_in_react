import React, { useState } from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function Serv() {
  const [show, setshow] = useState(false);
  console.log(show);
  return (
    <>
      <div id="about"
        className={
          show === true
            ? "w-full min-h-[1290px]  md:min-h-[800px] md:max-h[1100px] lg:h-[480px] lg:min-h-[860px] "
            : "w-full h-[1290px] my-20   md:h-[800px] md:h[1100px] lg:h-[480px]  "
        }
      >
        <div>
          {" "}
          <div className="py-8">
            {" "}
            <h1 className="text-4xl font-bold text-center ">
              {" "}
              Our <span className="text-[#02EEFE]"> Services</span>{" "}
            </h1>{" "}
          </div>
        </div>
        <div className="card flex flex-col  gap-7  justify-center lg:flex-row md:flex-row md:flex-wrap md:justify-center md:w-[100%] lg:justify-center p-8 ">
          <div className="lg:w-[22%] w-[100%] flex-col md:w-[45%] items-center text-center h-[250px] border border-[#05A6E8]  rounded-xl flex text-sm sm:text-lg lg:text-xl ">
            <div className="flex gap-2">
              <TiHtml5 className="text-7xl my-2 text-red-400" />
              <FaCss3Alt className="text-6xl my-5 text-[#01FCFF]" />
            </div>
            sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat, sequi. Quo, ea.
          </div>

          <div className="lg:w-[22%] w-[100%]  md:w-[45%] items-center flex flex-col  text-center  h-[250px]  border border-[#05A6E8]  rounded-xl text-sm sm:text-lg lg:text-xl">
            <div className="flex gap-7">
              <SiJavascript className="text-6xl text-yellow-500  my-3" />
              <SiReact className="text-6xl text-[#01FCFF] my-3" />
            </div>
            sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat, sequi.
          </div>

          <div className="lg:w-[22%] w-[100%]  md:w-[45%]  h-[250px]  items-center text-center flex flex-col border border-[#05A6E8]  rounded-xl text-sm sm:text-lg lg:text-xl">
            <div className="flex gap-7">
              <FaNode className="text-7xl text-orange-500  my-3" />
              <SiMongodb className="text-6xl text-[#15ED68] my-3" />
            </div>
            sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat, sequi.
          </div>

          <div className="lg:w-[22%] w-[100%]  md:w-[45%]  h-[250px] items-center text-center flex flex-col border border-[#05A6E8] rounded-xl text-sm sm:text-lg lg:text-xl">
            <div className="flex gap-7">
              <FaPython className="text-6xl text-[#0388C9]  my-3" />
              <SiMysql className="text-7xl text-[#15ED68] my-3" />
            </div>
            sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat, sequi.
          </div>
        </div>

        <div className="app  ">
          <div className="flex justify-center">
            <h1
              onClick={() => setshow(!show)}
              className=" text-center text-2xl w-[180px] h-9 bg-blue-600 rounded-md text-bold"
            >
              {show === false ? "Show" : "Hide"}
            </h1>
          </div>

          <div
            className={
              show === true
                ? "card flex flex-col  gap-7 justify-center lg:flex-row md:flex-row md:flex-wrap md:justify-center md:w-[100%] lg:justify-center p-8 "
                : "card flex flex-col  gap-7 invisible   justify-center lg:flex-row md:flex-row md:flex-wrap md:justify-center md:w-[100%] lg:justify-center p-8 "
            }
          >
            <div className="lg:w-[22%] w-[100%] flex-col md:w-[45%] items-center text-center h-[250px] border border-[#05A6E8]  rounded-xl flex text-sm sm:text-lg lg:text-xl ">
              <div className="flex gap-2">
                <TiHtml5 className="text-7xl my-2 text-red-400" />
                <FaCss3Alt className="text-6xl my-5 text-[#01FCFF]" />
              </div>
              sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, sequi. Quo, ea.
            </div>

            <div className="lg:w-[22%] w-[100%]  md:w-[45%] items-center flex flex-col  text-center  h-[250px]  border border-[#05A6E8]  rounded-xl text-sm sm:text-lg lg:text-xl">
              <div className="flex gap-7">
                <SiJavascript className="text-6xl text-yellow-500  my-3" />
                <SiReact className="text-6xl text-[#01FCFF] my-3" />
              </div>
              sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, sequi.
            </div>

            <div className="lg:w-[22%] w-[100%]  md:w-[45%]  h-[250px]  items-center text-center flex flex-col border border-[#05A6E8]  rounded-xl text-sm sm:text-lg lg:text-xl">
              <div className="flex gap-7">
                <FaNode className="text-7xl text-orange-500  my-3" />
                <SiMongodb className="text-6xl text-[#15ED68] my-3" />
              </div>
              sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, sequi.
            </div>

            <div className="lg:w-[22%] w-[100%]  md:w-[45%]  h-[250px] items-center text-center flex flex-col border border-[#05A6E8] rounded-xl text-sm sm:text-lg lg:text-xl">
              <div className="flex gap-7">
                <FaPython className="text-6xl text-[#0388C9]  my-3" />
                <SiMysql className="text-7xl text-[#15ED68] my-3" />
              </div>
              sarfaraz Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, sequi.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Serv;
