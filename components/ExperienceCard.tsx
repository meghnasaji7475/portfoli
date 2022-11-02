import React from 'react'
import {motion} from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience:Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
<article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 
w-[300px] md:w-[300px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img 
    initial=
    {{
        y:-100,
        opacity:0,
    }}
    transition={{
        duration:1.2,
    }}
    whileInView={{
        opacity:1,
        y:0,
    }}
    viewport={{ once: true}}


    className="w-22 h-22 rounded-full xl:w-[90px] xl:h-[90px] object-cover object-center
     md:h-[80px] md:w-[80px] " 
    src={urlFor(experience?.companyImage).url()} />

    <div className="px-0 md:px-10 ">
        <h4 className="text-2xl font-light">{experience.company}</h4>
        <div className="flex space-x-2 my-1">
            {/* Tech used */}
          
            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
        </div>
     
    </div>
      
      <ul className="list-disc space-y-2 ml-3 text-lg ">
          {experience.points.map( (point,i ) => (
              <li key={i}> {point}</li>
          ))}
       
         
         
      </ul>

</article>
  )
}