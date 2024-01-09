

import React from 'react'
import {CodeBracketIcon,EyeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({imgUrl,title,description}) => {
  return (
    <div>
        <div className='relative h-52 md:h-72 rounded-t-xl group' style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }} >
            
            <div className='absolute top-0 left-0 w-full h-full bg-[#181818] overlay bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link href="" className='relative border rounded-full h-14 w-14-[#ADB7BE]' >
                    <CodeBracketIcon className='w-10 h-10 text-[#ADB7BE] M-2 cursor-pointer hover:white'/>
                </Link>
            </div>
        </div>
        
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 '>
            <h5 className='mb-2 text-xl font-semibold font-xl'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
            
        </div>
    </div>
  )
}

export default ProjectCard