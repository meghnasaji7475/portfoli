import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

function Contact({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:meghna.cvsajikumar@gmail.com?subject=${formData.subject}&body=Hi I'm ${formData.name} . ${formData.message} (${formData.email})`
    };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl 
     px-10 justify-evenly  mx-auto items-center ">
       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500
    text-2xl">Contact</h3>

    <div className="flex flex-col space-y-5">
        <h4 className="text-2xl font-semibold text-center">
            I have got just what you need.{" "}
        <span className="underline decoration-[F7AB0A]\50"> Lets Talk.</span>
         </h4>

         <div className="space-y-3">
            <div className="flex  items-center space-x-5 justify-center">
                <PhoneIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
                <p className='text-m'>9746696217</p>
            </div>

            <div className="flex  items-center space-x-5 justify-center">
                <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
                <p className='text-m'>meghna.cvsajikumar@gmail.com</p>
            </div>

            <div className="flex  items-center space-x-5 justify-center">
                <MapPinIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
                <p className='text-m'>Chaniyil(H) Alappuzha , Kerala , India-688524</p>
            </div>     
         </div>
         <form 
         onSubmit={handleSubmit(onSubmit)}
         
         className=" flex flex-col space-y-2  w-fit mx-auto">
             <div className="flex space-x-2">
                 <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                 <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
             </div>
             <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
             <textarea {...register('message')} placeholder="Message" className="contactInput" />
             <button type="submit" className="bg-[#F7AB0A] py-1 px-10 rounded-md text-black font-bold text-lg">Submit</button>
         </form>
     </div>
    </div>

  )
}

export default Contact