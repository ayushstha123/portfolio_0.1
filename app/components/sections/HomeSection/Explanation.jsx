
'use client'
import React from 'react';
import LetterStagger from '../../Animations/StraggerAnimation';
import {  motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Explanation = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: false }); // Animate only once when in view

  const jumpInVariants = {
    hidden: {
      opacity: 0,
      y: 60, // Start a bit below
      scale: 0.8, // Start slightly smaller
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type:'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='bg-neutral-200 pt-20'>
      <div className='max-w-[1400px] mx-auto px-5'>
        <h2 className="text-black text-start nohemi text-[4rem] sm:text-[6.8rem] lg:text-[10rem] leading-[4rem] lg:leading-[12rem]">
          <LetterStagger speed={30}>About Me </LetterStagger><span className=' font-bold text-[12rem]'>↗</span>
        </h2>
        <div className='flex items-end justify-end'>
          <p className="text-sm md:text-xl w-1/2 pb-10 text-center md:text-end capitalize text-black manrope leading-tight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo tenetur eaque quod aspernatur officia porro rerum temporibus doloribus alias!
          </p>
        </div>
        <div ref={gridRef} className='grid grid-cols-3 gap-10'>
          <motion.div
            className='bg-neutral-300'
            variants={jumpInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />
          <motion.div
            className='bg-neutral-300 h-80 '
            variants={jumpInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }} // Add a slight delay for staggered effect
          />
          <motion.div
            className='bg-neutral-300 h-80 '
            variants={jumpInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }} // Add a further delay
          />
        </div>
      </div>
    </div>
  );
};

export default Explanation;