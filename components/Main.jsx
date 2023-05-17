import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import HologramImage from "./HologramImg";
import Link from "next/link";

const Main = () => {
  return (

    <div id="home" className="w-full h-screen text-center border border-gray-800 shadow-md shadow-green-300 ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">

        <div>
          <h1 className="py-2 text-xl">
           <span className="text-red-500 font-bold">Hi, this is Agent </span> Jakub
          </h1>
          <h1 className="py-4">I am a ....</h1>
          <div className="font-bold uppercase text-4xl transition duration-700 ease-in-out text-red-500">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "IT Technician",
                  "Frontend Developer",
                  "Backend developer",
                  "UI/UX Designer",
                  "Secret Agent",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="py-4 text-green-200 max-w-[70%] m-auto">
            on an assignment for building web applications with great user
            experiences.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <Link href="https://www.linkedin.com/in/jakuboh/" target="_blank">
                <div className="hover:scale-125 text-white hover:text-green-500">
                  <FaLinkedin />
                </div>
                </Link>

                <Link href="https://github.com/JSO2/" target="_blank">
                <div className="text-white hover:scale-125 hover:text-green-500">
                  <FaGithub />
                </div>
                </Link>
                <Link href="/#contact" >
                <div className="text-white hover:scale-125 hover:text-green-500 ">
                  <AiOutlineMail />
                </div>
                </Link>
          </div>
        </div>
        <div className="hidden sm:block md:items-start md:flex md:flex-col animate-pulse pb-10 m-auto">
          <HologramImage />
          </div>
      </div>

    </div>
  );
};

export default Main;
