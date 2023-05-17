import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Typewriter from "typewriter-effect";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_76y1h3m', 'template_5r1ep8k', form.current, '4CSd-7J2VwSZrx9Q_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase pb-8">Contact</p>

        <div className="grid lg:grid-cols-5 gap-8 ">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-green-400 rounded-xl py-4 px-20 text-center ">
            <div className="lg:py-4 h-full">
              <div>
                <img
                  src="/../assets/logo.png"
                  className="rounded-xl hover:scale-105 ease-in duration-300 px-10"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2"> <span className="text-red-500 font-bold">Agent</span> Oh</h2>
                <div className="font-bold uppercase text-md transition duration-700 ease-in-out text-red-500">
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
                <p className="py-4">
                  <span className="text-red-500 font-bold text-2xl">Greetings, </span> fellow operatives. As a skilled spy developer with expertise in
                  covert coding, I navigate the shadows of the digital realm.
                   Currently open to new assignments and collaborative endeavors, I am
                  eager to contribute my skills to innovative projects that demand precision, secrecy, and
                  technical prowess.
                </p>
              </div>
              <div>
                <p className=" py-8 italic">Let us connect and discuss how we can work together in the realm of technology.</p>
                <div className="flex items-center justify-between py-4">
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
            </div>
          </div>
          {/*right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-green-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form}
              onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Full Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-green-500"
                      type="text"
                      placeholder='Full Name'
                      required
                      name = 'user_name'
                    />
                  </div>

                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-green-500"
                    type="email"
                    placeholder="Email"
                    required
                    name= 'user_email'
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-green-500"
                    type="text"
                    placeholder="Subject"
                    required
                    name='subject'
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-green-500"
                    rows="10"
                    type="text"
                    placeholder="Send a message"
                    required
                    name='message'
                  ></textarea>
                </div>
                <button
                type='submit'
                className="w-full p-4 text-green-500
                bg-transparent hover:bg-green-500  font-semibold py-2 px-4 border border-green-400 rounded shadow
                mt-4 hover:scale-100 hover:text-white"

                >Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href='/'>
                <div className="rounded-full shadow-lg shadow-green-500 p-5 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-400 hover:shadow-white">
                    <MdOutlineKeyboardDoubleArrowUp className="text-green-600 hover:text-white" size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
