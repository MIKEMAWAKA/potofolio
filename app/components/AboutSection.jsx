'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

import ProjectCard from './ProjectCard'





const TAB_DATA =[
    {
        title:'Skills',
        id:'skills',
        content:(
            <ul className='pl-2 list-disc'>
                <li>Flutter</li>
                <li>Android & iOS</li>
                <li>Angular</li>
                <li>Laravel</li>
                <li>Nextjs</li>
                <li>React</li>
                <li>Firebase</li>
                <li>Mysql</li>
            </ul>
        )
    },
    {
        title:'Education',
        id:'education',
        content:(
            <ul className='pl-2 list-disc'>
                <li>University of Dar es salaam</li>
                <li>Google prural site course</li>
            </ul>
        )
    },
    {
        title:'Certifications',
        id:'certifications',
        content:(
            <ul className='pl-2 list-disc'>
                <li>CCNA</li>
                <li>Google prural site course</li>
            </ul>
        )
    }
]


const AboutSection = () => {

    const [tab,setTab] = useState("skills")
    const [isPending,startTransition] = useTransition();

    const handleTabChange =(id) =>{
        startTransition(()=>{
            setTab(id);
            
        });
        
    }

    
  return (
    <section className='text-white' id="about"><div className='items-center gap-8 px-8 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/about-image.png'    alt='about Image' width={500} height={500}/>
        
        <div className='flex flex-col h-full mt-4 text-left md:mt-0'>
            <h2 className='mb-4 text-4xl font-bold text-white'>About Me</h2>
            <p className='text-base lg:text-lg'>
            Experienced Mobile App Developer/Software engineer with a demonstrated history of working in the Software engineering,computer and network security industry. Skilled in Mobile Application Development, Flutter,PHP, Java, Full-Stack Development, and Android Studio. Strong engineering professional with a Engineer's Degree focused in computer engineering and information technology from UNIVERSITY OF DAR ES SALAAM.
            </p>

            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={()=>handleTabChange('skills')} active={tab=='skills'}>Skills</TabButton>
                <TabButton selectTab={()=>handleTabChange('education')} active={tab=='education'}>Education</TabButton>
                <TabButton selectTab={()=>handleTabChange('certifications')} active={tab=='certifications'}>Certifications</TabButton>
            
              
                
            </div>
            <div className='mt-8'>{TAB_DATA.find((T)=>T.id===tab).content}
                
            </div>
        </div>
        </div></section>
  )
}

export default AboutSection