import Image from "next/image";
import React from "react";
import todo from "../public/assets/todo.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";


const clone = () => {



  return (
    <div className='w-full'>
      <div className="w-screen h-[40vh] lg:w-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[40vh] bg-green-200/20 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={todo}
          alt="/"
        />
        <div
          className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-20%]
        text-red-500 z-10 p-2  font-bold"
        >
          <h2 className="py-2 text-lg ">Todo App</h2>

        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-2 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="text-red-500 text-xl underline underline-offset-4 py-4">
            Mission Report:
          </h2>
          <p className="border border-green-300 p-4">

            This mission was a successful completion of operation To-Do App development utilizing cutting-edge technologies such as Next.JS, CSS, and Firebase. The
            objective was to create an efficient to-do application with advanced features like adding todo onto a list and by diving further into the details of the app.
            Using Firebase as a real-time data storage, it is able to create tasks to add.
            <br /> <br />
            <span className="pt-4 text-red-500 font-bold ">End of Report.</span>
          </p>
          <Link href="https://todo-task-hazel.vercel.app/" target="_blank"
          rel="noopenr noreferrer">

          <button className="c text-green-200
    rounded-xl p-4 group bg-gradient-to-r from-gray-600 to-gray-400 px-8 py-2 mt-4
    font-bold hover:scale-110 hover:text-red-300 mr-8 ">
            Demo
          </button>
          </Link>
          <Link href="https://github.com/JSO2/todo-task" target="_blank"
          rel="noopenr noreferrer">

          <button className=" text-green-200
    rounded-xl p-4 group bg-gradient-to-r from-gray-600 to-gray-400 px-8 py-2 mt-4
    font-bold hover:scale-110 hover:text-red-300 ">
            Code
          </button>
          </Link>

        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-green-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-red-500">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-green-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-green-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-green-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-green-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-8 sticky bottom-0 right-0">

      <Link href="/#projects">
        <button className="cursor-pointer text-center rounded-xl font-bold bg-gray-500 p-4 text-green-200 hover:scale-110 hover:text-red-300">Back to Base</button>
      </Link>
      </div>
    </div>
  );
};

export default clone;
