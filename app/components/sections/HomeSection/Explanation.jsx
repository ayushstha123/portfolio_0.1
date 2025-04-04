'use client'
import React from 'react';
import { motion } from 'framer-motion';

const FalseMemoryPoster = () => {
  const gridVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cellVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 0.8, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-orange-500 w-full text-black font-sans flex flex-col items-start justify-start h-[56rem] p-5 relative overflow-hidden">
      {/* Top Bar */}
      <div className="w-full flex justify-start mb-5">
        <span className="text-xs text-gray-700">1-100</span>
      </div>

      {/* Content */}
      <div className="mb-7 pl-2">
        <h1 className="text-3xl font-bold m-0 mb-1">false memory</h1>
        <p className="text-xs m-0 text-gray-800">a memory of something that</p>
        <p className="text-xs m-0 text-gray-800">is not true or did not occur</p>
      </div>

      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-2 grid-rows-2 pointer-events-none"
        variants={gridVariants}
        initial="initial"
        animate="animate"
      >
        {/* Top Left (Fading) */}
        <motion.div
          className="bg-orange-500 to-transparent opacity-0"
          style={{ background: 'linear-gradient(to right bottom, #f97316, transparent)' }}
          variants={cellVariants}
        />

        {/* Top Right */}
        <motion.div
          className="bg-gradient-to-b from-orange-500 to-black/80"
          variants={cellVariants}
        />

        {/* Bottom Left */}
        <motion.div
          className="bg-gradient-to-r from-orange-500 to-black/80"
          variants={cellVariants}
        />

        {/* Bottom Right */}
        <motion.div
          className="bg-orange-500 to-black/80"
          variants={cellVariants}
        />
      </motion.div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end mt-auto pl-2 pr-2">
        <span className="text-xs text-gray-700">M-T</span>
        <span className="text-xs text-gray-700">2023</span>
      </div>
    </div>
  );
};

export default FalseMemoryPoster;