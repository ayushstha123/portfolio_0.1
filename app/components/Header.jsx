import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  const date = Date()
  return (
    <section className="max-w-[1400px] fixed top-0  mt-5 md:mt-10 mx-auto w-full flex px-5 justify-between items-center">
      <div>
        <div className='flex items-center gap-3'>
          {/* <Link href='/'>
            <Image
              src='/svgs/logo.svg'
              alt='logo'
              width={20}
              height={20}
              className='w-8 h-8 md:w-10 md:h-10' />
          </Link> */}
          <div>
            <h1 className='nebula uppercase text-[10px] sm:text-sm md:text-lg  text-white'>Ayuxh</h1>
            <div className='flex items-center gap-1 md:gap-1 '>
              <span className='text-green-400 text-lg animate-pulse'>▼</span>
              <span className="relative manrope font-extralight uppercase text-[9px] md:text-sm text-white mt-1 md:mt-0 group">
                Available for collaboration
                <span className="absolute  left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                {/* <div className=' manrope leading-tight  uppercase font-extralight text-[12px] text-white'>
                  {date}
                </div> */}
              </span>


            </div>

          </div>
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