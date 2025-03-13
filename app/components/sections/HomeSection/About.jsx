import React from 'react'

const About = () => {
    return (
      <div className="max-w-[1400px] py-20 mx-auto px-2 flex items-center justify-center">
        <div className='absolute h-[70rem] rotate-[70deg] shadow-[0_0_90px_40px_rgba(255,255,255,0.9)]  bg-[radial-gradient(closest-side,rgb(198,198,198),rgb(198,198,198),rgb(148,148,148))] rounded-full'>
        </div>
        <div className='w-[40rem] h-[40rem] shadow-[0_0_90px_50px_rgba(255,255,255,0.9)] bg-[radial-gradient(closest-side,theme(colors.neutral.100),theme(colors.neutral.200),theme(colors.neutral.700))] rounded-full'>
        </div>
        <h2 className='absolute mt-10 text-white w-1/2  text-center tracking-wide md:tracking-normal  lg:text-center uppercase text-[4rem] sm:text-[6rem] py-2 md:py-12 mb-10 leading-[4rem] lg:leading-[4rem] nebula'>Explore <span className='block py-4 text-black'>&</span>Discover</h2>
      </div>
    );
  };
  
  export default About;
  