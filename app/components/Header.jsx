import React from 'react'

const Header = () => {
  return (
    <section className="max-w-[1400px] bg-transparent mt-10 mx-auto w-full flex px-5 justify-between items-center">
      <div>
        <h1 className='nebula uppercase text-[10px] sm:text-sm md:text-lg text-white'>Ayuxh</h1>
        <div className='flex gap-1 md:gap-2 items-center '>
        <span className='text-green-300 text-sm animate-pulse'>▰</span>
        <span className='font-mono font-extralight uppercase text-[9px] md:text-sm text-white mt-1 md:mt-0'>Available for collaboration</span>
        </div>
        </div>
        <div className='flex flex-col gap-1 group cursor-pointer'>
          <div className='w-10 h-[3px] bg-white'></div>
          <div className='w-10 h-[3px] bg-white group-hover:w-4 group-hover:duration-400'></div>
        </div>
    </section>
  )
}

export default Header