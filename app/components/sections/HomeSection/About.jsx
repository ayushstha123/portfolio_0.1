"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress (0 to 1) to rem values
  const width = useTransform(scrollYProgress, [0, 1], ["30rem", "60rem"]);
  const height = useTransform(scrollYProgress, [0, 1], ["30rem", "60rem"]);

  return (
    <div className="bg-neutral-300 border-t py-20 border-black">
    <div className="max-w-[1400px] mx-auto px-5 flex flex-col items-center gap-10">
      {/* Middle Section */}
      <div className="py-10 rounded-4xl flex flex-col md:flex-row items-center justify-between w-full">

        <h2 className="text-sm md:text-xl w-full md:w-[20%] text-center md:text-start capitalize text-black manrope leading-tight px-8">
          Building Seamless,high performing websites optimized for speed, SEO, and accessibility
        </h2>
        {/* Animated Glowing Circle */}
        <motion.div
          style={{ width, height }}
          initial={{ opacity: 0, width: "20vw", height: "20vw" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 flex items-center justify-center 
                     shadow-[0_0_50px_20px_theme(colors.neutral-200)] 
                     bg-[radial-gradient(closest-side,theme(colors.white),theme(colors.neutral.300))] 
                     rounded-full  w-[clamp(10rem, 50vw, 40rem)] h-[clamp(10rem, 50vw, 40rem)]"
        >
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] text-center w-[20rem] md:w-[40rem] text-black nohemi leading-tight px-8">
            Innovative↩Web Solutions↗Tailored for
            You ☚

          </h2>
        </motion.div>

        <p className="text-sm md:text-xl  w-full md:w-[20%] text-center md:text-end capitalize text-black manrope leading-tight px-8">
          crafting clean, maintainable code that enhances user experience and drives engagement and love.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
