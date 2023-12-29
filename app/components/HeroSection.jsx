

"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';






    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Michael Mawaka',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile App Developer',
        1000,
        'Web Developer',
        1000,
        'Full Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />



const HeroSection = () => {
  return (
    <section>

   <div className='grid grid-cols-1 sm:grid-cols-12'>

    <div className='col-span-8 text-center place-self-center sm:text-left justify-self-start'>
        

            
   
   <h1 className='mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl' >
    <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
    Hello, I`m  {"  "}
    </span>
    <br />

    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Michael Mawaka',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile App Developer(Android & iOS)',
        1000,
        'Web Developer',
        1000,
        'Full Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
    
      repeat={Infinity}
    />
    </h1>
   
   <p className='text-[#ADB7BE]  mb-6 lg:text-xl text-base sm:text-lg'> 
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
   </p>

<div>
    <button className='w-full px-6 py-3 mr-4 text-white rounded-full hover:bg-slate-200 sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>Hire Me</button>
    <button className='w-full px-1 py-1 mt-3 mr-4 text-white bg-transparent rounded-full sm:w-fit hover:bg-slate-800 bg-gradient-to-br from-blue-500 to-pink-600'> 
    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
    </button>
</div>
   
   </div>

   <div  className='col-span-4 mt-4 mb place-self-center lg:mt-0'>
   <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
    <Image
     src='/images/hero-image.png'
     alt='hero Image'
     className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
     width={300}
     height={300}
    />
   </div>
   </div>

 
   </div>
    </section>

  )
}

export default HeroSection