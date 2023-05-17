
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWindowClose } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TbListSearch } from "react-icons/tb"


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg ] = useState('#030712')
    const [linkColor, setLinkColor] = useState('#000D0D')


    // useEffect(() => {
    //     if(
    //       router.asPath === '/clone' ||
    //       router.asPath === '/twitter'
    //     ) {
    //       setNavBg('transparent ')
    //       setLinkColor('#369C5F')

    //     } else {
    //       setNavBg('#030712')
    //       setLinkColor('#D63E40')

    //     }
    // },[router])
    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true)
        } else {
          setShadow(false)
        }
      }
      window.addEventListener('scroll', handleShadow)
    }, [])

  return (

      <div
      style={{backgroundColor: `${navBg}`}}
      className={shadow ? 'fixed w-full h-20 shadow-xl shadow-green-500 z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href='/'>
         <span className="relative flex h-3 w-3 ml-8 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 mt-2 ml-auto "></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 mt-2 ml-auto "></span>
           </span>
          <div className="font-bold rounded-tl-lg  border  border-green-500 pb-2  ">
            <h1 className="text-center mt-2"> JO</h1>
          </div>
          </Link>

          <div>
            <ul
            style={{backgroundColor: `${linkColor}`}}
            className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
            </ul>
            <div  onClick={handleNav} className=" hover:scale-125 md:hidden pr-4 ">
              <TbListSearch size={30} />
            </div>
          </div>
        </div>
        <div className={nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-green-50/10" : ""}>
          <div className={nav ? " fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500"
          : "fixed right-[-100%] top-0 p-10 ease-in duration-500"}>
            <div>
              <div className="flex w-full items-center justify-between">
              <Link href='/'>
         <span className="relative flex h-3 w-3 ml-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 mt-2 ml-auto"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 mt-2 ml-auto "></span>
           </span>
          <div className="font-bold rounded-t-lg border border-green-500 pb-2 hover:bg-white hover:opacity-50 ">
            <h1 className="text-center mt-2"> JO</h1>
          </div>
          </Link>
                <div onClick={handleNav} className=" hover:scale-125 cursor-pointer">
                  <FaWindowClose color="red" size={35} />
                </div>
              </div>
            </div>
            <div className="border-double border-4 border-red-600 my-4 flex flex-col">
              <p className="text-red-600 font-bold text-center uppercase sm:tracking-widest ">
                Classified Information
              </p>
            </div>
            <div className="text-center cursor-pointer sm:text-4xl text-white py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-3 font-bold hover:border hover:border-green-500 hover:text-green-500">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-3 font-bold hover:border hover:border-green-500 hover:text-green-500">
                    About
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-3 font-bold hover:border hover:border-green-500 hover:text-green-500">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-3 font-bold hover:border hover:border-green-500 hover:text-green-500">
                    Contact
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-3 font-bold hover:border hover:border-green-500 hover:text-green-500">
                    Skills
                  </li>
                </Link>
              </ul>
              <div className="pt-20 flex justify-between my-4 w-full sm:w-[50%] m-auto ">
                <Link href="https://www.linkedin.com/in/jakuboh/" target="_blank">
                <div className="hover:scale-125 hover:text-green-500">
                  <FaLinkedin />
                </div>
                </Link>
                <Link href="https://github.com/JSO2/" target="_blank">
                <div className="hover:scale-125 hover:text-green-500">
                  <FaGithub />
                </div>
                </Link>
                <Link href="/#contact" onClick={handleNav}>
                <div className="hover:scale-125 hover:text-green-500 " onClick={() => setNav(false)}>
                  <AiOutlineMail />
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Navbar;
