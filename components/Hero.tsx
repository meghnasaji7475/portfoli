import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from '../components/BackgroundCircles'
import { urlFor } from '../sanity';
import {PageInfo } from "../typings"

type Props = {
  pageInfo:PageInfo
}

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
      words:[`Hi I'm ${pageInfo?.name}  
    `,"loves-To-travel.tsx","<ButLovesToCodeMore>"],
    loop: true,
    delaySpeed:2000,
  });
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()} alt="" />
       
       <div className="z-20">

           <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo.role}</h2>
       <h1 className="text-5xl lg:text-6xl font-semibold px-10">
        <span className='mr-3'> {text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1> 
        <div className="pt-5">

            <Link href="#about">
            <button className="px-6 py-2 border border-[#242424] 
            rounded-full uppercase text-xs tracking-widest text-gray-500 
            transition-all hover:border-[#F7AB0A]/40 hover-text-[#F7AB0A]/40">About</button>
            </Link>

            <Link href="#experience">
            <button className="px-6 py-2 border border-[#242424] 
            rounded-full uppercase text-xs tracking-widest text-gray-500 
            transition-all hover:border-[#F7AB0A]/40 hover-text-[#F7AB0A]/40">Experience</button>
            </Link>

            <Link href="#skills">
            <button className="px-6 py-2 border border-[#242424] 
            rounded-full uppercase text-xs tracking-widest text-gray-500 
            transition-all hover:border-[#F7AB0A]/40 hover-text-[#F7AB0A]/40">Skills</button>
            </Link>

            <Link href="#project">
            <button className="px-6 py-2 border border-[#242424] 
            rounded-full uppercase text-xs tracking-widest text-gray-500 
            transition-all hover:border-[#F7AB0A]/40 hover-text-[#F7AB0A]/40">Projects</button>
            </Link>
          
        </div>
       </div>
      
     </div>
    );
  
}