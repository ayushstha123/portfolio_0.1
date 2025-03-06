import Image from 'next/image'
import React from 'react'
import HamburgerAnimation from './HamburgerAnimation'

const Header = () => {
  return (
    <section className="max-w-[1400px] mt-5 mx-auto w-full flex justify-between items-center">
        <h1 className='nebula uppercase text-lg text-white'>Ayuxh</h1>
        <Image
        src='/svgs/hamburger.svg'
        width={10}
        height={10}
        alt='Hamburger image icon'
        className='w-10 h-10'
        />
        <HamburgerAnimation/>
    </section>
  )
}

export default Header