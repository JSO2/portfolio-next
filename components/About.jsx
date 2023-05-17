import Image from "next/image";
import React from "react";



const About = () => {
  return (
    <div
      id="about"
      className="w-full p-2 items-center  pl-4 md:text-xl"
    >


          <p className="uppercase text-xl tracking-widest py-4 ">About</p>
      <div className="pt-8 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2 pb-2 relative rounded p-4 w-full h-full bg-transparent shadow-xl
        border-2 border-solid border-green-500">






        <div className="flex items-center">
          <h1 className="font-bold uppercase text-2xl m-auto text-red-500 md:text-3xl tracking-widest underline">Confidential Operative ID </h1>
              <Image src="/assets/profileImg.png" width={100} height={100} className="ml-auto rounded-lg bg-green-100 " />
        </div>
              <h2 className="py-2">

            <span className="font-bold ">Agent Name:   </span>
            <span className="font-light text-red-500">  Jakub Oh </span>
              </h2>
                <h2 className="py-2">

            <span className="font-bold ">Agent ID: </span>
            <span className="font-light text-red-500"> 007</span>
                </h2>


          <p className=" text-green-500 text-xl font-bold">Mission: </p>
          <p className=" text-red-500 text-sm pr-2">
          As a secret agent-turned-developer, I excel at creating secure, robust, and
          efficient software applications. Whether it's crafting elegant user interfaces,
          optimizing performance, or implementing complex algoriths, I apply the same
          meticulous attention to detail that I honed in the field. My experience as a covert
          operative has taught me the importance of adaptability, quick thinking, and
          working under pressure. By blending my expertise as a software developer
          with my understanding of covert operations, I bring a unique perspective
          to every project I undertake. Discretion is my code, and innovation is my mission.  </p>
        </div>
      </div>

    </div>
  );
};

export default About;
