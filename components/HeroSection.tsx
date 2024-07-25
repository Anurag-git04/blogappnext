import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='flex md:flex-row flex-col items-center max-w-6xl mx-auto my-10 gap-8'>
        <div>
            <Image
             src={"/img.png"}
             alt='image'
             width={600}
             height={600}
            />
        </div>
        <div className='flex-1 flex flex-col gap-5'>
            <h1 className='md:text-4xl text-2xl font-bold'>Looking for the Most Recent Topics Discussed? WE Got You Covered 100%</h1>
            <p>This is where We Tell Stories. Ranging from Technology, Education, Coding and Jobs.</p>
        </div>
    </div>    
  )
}

export default HeroSection