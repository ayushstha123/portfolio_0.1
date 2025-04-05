import React from 'react'
import LetterStagger from '../../Animations/StraggerAnimation'
import Image from 'next/image'

const Explanation = () => {
  return (
    <div className='bg-neutral-200 pt-20'>
      <div className='max-w-[1400px] mx-auto px-5'>
        <h2 className="text-black text-start nohemi  text-[4rem] sm:text-[6.8rem] lg:text-[10rem] leading-[4rem] lg:leading-[12rem]">
          <LetterStagger speed={30} >About Me </LetterStagger><span className=' font-bold text-[12rem]'>↗</span>
        </h2>
        <div className='flex items-end justify-end'>
          <p className="text-sm md:text-xl  w-1/2 pb-10 text-center md:text-end capitalize text-black manrope leading-tight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo tenetur eaque quod aspernatur officia porro rerum temporibus doloribus alias!
          </p>
        </div>
        <div className='grid grid-cols-3 gap-20'>
          <div className='bg-neutral-300'>

          </div>
          <div className='bg-neutral-300 h-80 gran' />
          <div className='bg-neutral-300 h-80 gran' />
        </div>
      </div>
    </div>
  )
}

export default Explanation