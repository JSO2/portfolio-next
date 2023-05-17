
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-green-400
    rounded-xl p-4 group hover:bg-gradient-to-r from-green-600 to-[#80ffb0]'>

      <Image src={backgroundImg} alt='/' className="rounded-xl group-hover:opacity-10"/>
      <div className="hidden group-hover:block absolute top[-50%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
        <h3 className="sm:text-6xl text-2xl text-red-500 tracking-widest text-center py-4">{title}</h3>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg border bg-gray-700 border-gray-700 text-green-500 font-bold text-lg cursor-pointer
          hover:bg-gray-700 hover:scale-110 hover:text-red-500 p-2 ">Access More Info</p>
        </Link>
      </div>
    </div>

  )
}

export default ProjectItem