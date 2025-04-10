
'use client'
import React from 'react';
import LetterStagger from '../../Animations/StraggerAnimation';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import FadeUpText from '../../Animations/TextFadeUp';
import { InfiniteScroll } from '../../InfinityLoop';

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
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='bg-neutral-200 pt-20'>
      <div className='max-w-[1400px] mx-auto px-5'>
        <h2 className="text-black text-start nohemi text-[4rem] sm:text-[6.8rem] lg:text-[8rem] leading-[4rem] lg:leading-[12rem]">
          <LetterStagger speed={30}>About Me </LetterStagger><span className=' font-bold text-[9rem]'>↗</span>
        </h2>
        <div className='flex items-end justify-end'>
          <p className="text-sm md:text-xl w-1/2 pb-10 text-center md:text-end text-black manrope leading-tight ">
            Hi, I’m Ayush Shrestha, a full-stack developer who thrives on crafting websites that stand out. I’ve always been fascinated by the power of code, and I channel that passion into every project I take on.
          </p>
        </div>
        <div ref={gridRef} className='grid grid-cols-3 gap-10'>
          <motion.div
            className='bg-white h-[28rem] relative'
            variants={jumpInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className='w-full h-[28rem] bg-start bg-blend-difference '>
              <Image
                fill
                src="/photos/Aayush.webp"
                className='grayscale object-cover '
                alt="portfolio content"
              />
            </div>
          </motion.div>
          <motion.div
            className='bg-gradient-to-t to-neutral-300 from-white shadow-2xl h-[28rem] p-5'
            variants={jumpInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }} // Add a slight delay for staggered effect
          >

            <p className="text-sm md:text-[3.5rem] text-center md:text-start text-black nohemi uppercase leading-tight ">
              <FadeUpText>
                From sleek front-end designs to scalable back-end systems :)
              </FadeUpText>
            </p>
          </motion.div>
          <motion.div
            className='bg-neutral-300 h-[28rem] overflow-hidden'
            variants={jumpInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }} // Add a further delay
          >
            <InfiniteScroll/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;