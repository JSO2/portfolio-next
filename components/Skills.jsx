import Image from "next/image";
import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiCss3, SiTailwindcss, SiTypescript, SiFirebase, SiAdobeillustrator } from "react-icons/si"
import {TbBrandJavascript } from "react-icons/tb"
import njs from "../public/assets/njs.png";



const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2 pt-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase py-8">Special Skills</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-orange-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#E56028] animate-pulse">
                <FaHtml5 />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#E56028] ">HTML</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-blue-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#2863EA] animate-pulse ">
                <SiCss3 />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#2863EA]">CSS</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-[#E7D44D]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#E7D44D] animate-pulse">
                <TbBrandJavascript />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#E7D44D]">JAVASCRIPT</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-[#62D4F3]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#62D4F3] animate-pulse">
                <FaReact />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#62D4F3]">REACT</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-[#0EADCA]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#0EADCA] animate-pulse">
                <SiTailwindcss />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#0EADCA]">TAILWIND</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-[#FE1301]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#FE1301] animate-pulse">
                <SiAdobeillustrator />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#FE1301]">ADOBE</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-[#2F74C0]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#2F74C0] animate-pulse">
                <SiTypescript />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#2F74C0]">TYPESCRIPT</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border border-[#F6C62F]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto text-6xl text-[#F6C62F] animate-pulse">
               < SiFirebase/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#F6C62F]">FIREBASE</h3>
                </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Skills;
