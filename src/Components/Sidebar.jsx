import React from "react";
import myImage from "../assets/images/my-avatar.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLocationCrosshairs } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="w-[25rem] h-fit  top-8 left-10 rounded-3xl fixed flex flex-col items-center p-10 bg-[#1E1E1F]  mb-4">
      <div className="img w-52 h-auto rounded-2xl bg-[#3C3C3D] ">
        <img src={myImage} alt="" />
      </div>
      <div className="title">
        <h1 className="text-[1.5rem] mt-4 font-semibold text-white">
          Siddharth Maddheshiya
        </h1>
      </div>
      <p className="text-[.9rem] text-white mt-8 px-6 py-2 bg-[#2B2B2C] rounded-lg">
        WEB DEVELOPER
      </p>

      <div className="contacts flex items-center w-full justify-center flex-col gap-10 border-t-2 mt-10 py-8">
        <div className="email my-4 flex items-center w-full justify-center gap-5">
          <span className="text-white inline-block text-4xl">
            <MdEmail />
          </span>
          <div className="items text-white text-xl ">
            <label htmlFor="email">Email</label>
            <p>bhaisiddharth63@gmail.com</p>
          </div>
        </div>
        <div className="email my-4 flex items-center w-full justify-start gap-[2rem]">
          <span className="text-white inline-block text-4xl">
          <FaPhoneAlt />
          </span>
          <div className="items text-white text-xl ">
            <label htmlFor="email">Phone</label>
            <p>+919696607477</p>
          </div>
        </div>
        <div className="email my-4 flex items-center w-full justify-start gap-[2rem]">
          <span className="text-white inline-block text-4xl">
          <SlCalender />
          </span>
          <div className="items text-white text-xl ">
            <label htmlFor="email">Location</label>
            <p>Uttar Pradesh ,India</p>
          </div>
        </div>
        <div className="email my-4 flex items-center w-full justify-start gap-[2rem]">
          <span className="text-white inline-block text-4xl">
          <FaLocationCrosshairs />
          </span>
          <div className="items text-white text-xl ">
            <label htmlFor="email">Birthday</label>
            <p>01-01-2004</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
