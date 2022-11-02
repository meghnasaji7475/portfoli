import React from 'react'
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion";
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
  socials: Social[]
};

export default function Header({ socials }: Props) {
  return (
    <header className= "sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}

        className="flex flex-row items-center ">
          
          {/* Social Icons */}
          {socials.map((social)=> (

             <SocialIcon
             key={social._id}
               url={social.url}
              fgColor='gray' bgColor='transparent'
             />

          ))}
          {/* <SocialIcon
          url="https://www.facebook.com/meghna.skumar.1/" 
          fgColor='gray' bgColor='transparent'
           />

           <SocialIcon
          url="https://twitter.com/MeghnaDavid96"
          fgColor='gray' bgColor='transparent'
           />

           <SocialIcon
          url="https://www.linkedin.com/in/meghna-s-kumar-0bb731205/"
          fgColor='gray' bgColor='transparent'
           />

           <SocialIcon
          url="https://github.com/meghnasaji7475"
          fgColor='gray' bgColor='transparent'
           />

            <SocialIcon
          url="https://www.quora.com/profile/Meghnas-Kumar"
          fgColor='gray' bgColor='transparent'
           />

            <SocialIcon
          url="https://www.instagram.com/meghna_saji/"
          fgColor='gray' bgColor='transparent'
           /> */}
        

        </motion.div>

        <Link href="#contact">

        <motion.div 
        
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1,
        }}
        
        className="flex flex-row items-center text-gray-300 cursor-pointer">

          <SocialIcon 
          className="cursor-pointer"
          network='email'
          fgColor="gray"
          bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>


        </motion.div>
        </Link>
        
    </header>
  )
}