import React from 'react'
import {motion} from "framer-motion";
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill:Skill
    directionLeft?:boolean;
}

function Skill({directionLeft , skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
          initial=
          {{
              x:directionLeft ? -200 : 200,
              opacity:0,
          }}
          transition={{
              duration:1,
          }}
          whileInView={{
              x:0,
              opacity:1,
          }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-14 h-14 md:w-18 
        md:h-18 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out"/>

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-14 w-14 md:w-18 md:h-18 xl:w-26 xl:h-26 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-m font-bold text-bold text-black opacity-100">
                    {skill.progress}% 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill