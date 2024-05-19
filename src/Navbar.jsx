import React, { useState, useRef } from "react";
import { MdOutlineDensitySmall } from "react-icons/md";
import Topdata from "./Topdata";
import { RxCross1 } from "react-icons/rx";
function navbar() {
  const [manuBtn, setmanuBtn] = useState(0);
  const [crossBtn, setcrossBtn] = useState(0);

  const show_manu_bar = (e) => {
    setmanuBtn(1);
    console.log("manu btn :", manuBtn);
    if (manuBtn === 1) {
      setmanuBtn(0);
    }
  };
  const cross_btn = (e) => {
    setcrossBtn(1);
    console.log("cross  btn :", crossBtn);
    if (crossBtn === 1) {
      setcrossBtn(0);
    }
  };
  return (
    <>
      <div id="navbar" className=" topbar w-full h-[950px] lg:h-[600px] bg-[#030A16]    ">
        <div className="navbar w-full px-10 text-xl flex justify-between lg:justify-around items-center py-6 ">
          {/* navbar */}
          <div className="logo font-bold">Rio Coder </div>
          <div className="navbar lg:invisible  font-bold">
            <MdOutlineDensitySmall onClick={show_manu_bar} />
          </div>

          <div className="alllink hidden lg:flex lg:gap-16  font-bold ">
            <div>
              <a href="#home"> Home </a>
            </div>
            <div>
              <a href="#about"> About </a>
            </div>
            <div>
              <a href="#contactus"> Contact </a>
            </div>
            <div>
              <a href="#projects"> Projects </a>
            </div>
          </div>
        </div>
        {/* Topdata  */}
        <Topdata />
      </div>

      {/* <div
        className={
          manuBtn === 1
            ? "  w-[50%] mx-[50%] p-6 h-[300px] bg-[#030A16] flex-col gap-6 mx-22 absolute  rounded-lg lg:invisible "
            : manuBtn === 0
            ? "  w-[50%] mx-[50%] p-6 h-[300px] bg-[#030A16] flex-col gap-6 mx-22 absolute  rounded-lg lg:invisible  "
            : crossBtn === 1
            ? "  w-[50%] mx-[50%] p-6 h-[300px] bg-[#030A16] flex-col gap-6 mx-22 absolute  rounded-lg lg:invisible hidden "
            : "  w-[50%] mx-[50%] p-6 h-[300px] bg-[#030A16] flex-col gap-6 mx-22 absolute  rounded-lg lg:invisible "
        }
      >
        <div>
          <RxCross1 onClick={cross_btn} className="text-3xl mx-24" />
        </div>
        <div>
          <a href="/"> Home </a>
        </div>
        <div>
          <a href="/"> About </a>
        </div>
        <div>
          <a href="/"> contact </a>
        </div>
        <div>
          <a href="/"> another </a>
        </div>
      </div> */}
    </>
  );
}

export default navbar;
