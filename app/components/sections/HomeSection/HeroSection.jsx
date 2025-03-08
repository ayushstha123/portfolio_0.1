'use client'
import useMousePosition from '@/app/utils/useMousePosition'
import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TextFade } from '../../Animations/TextFadeUp'
const HeroSection = () => {
    const { scrollY } = useScroll()
    const marginLeft = useTransform(scrollY, [0, 500], [0, 200])
    const { x, y } = useMousePosition();
    const size = 30;
    return (
        <div
        >
            <img
                src="/svgs/circle.svg"
                alt="cursor SVG"
                style={{
                    position: 'absolute',
                    left: x - size / 2,
                    top: y - size / 2,
                    width:size,
                    height:size,
                    pointerEvents: 'none',
                    transition: ' 0.1s ease'
                }}
                className='md:block hidden'
            />
            <section className=" max-w-[1400px] mx-auto px-2 flex items-center justify-center">
                <div className="bg-gradient-to-b grain py-10 px-5 md:px-10 w-full rounded-4xl mt-10">
                    <motion.div
                        transition={{ type: "spring", stiffness: 100, velocity: 2 }}
                        // style={{
                        //     marginLeft
                        // }}
                       className="manrope text-sm  md:text-3xl  text-center text-black pb-10">  Crafting Scalable & Modern Web Experiences</motion.div>
                    <div className="text-white text-center spaicng tracking-wide md:tracking-normal lg:text-center ateoric text-[4rem] sm:text-[6.8rem] lg:text-[15rem] py-2 md:py-12 mb-10 leading-[4rem] lg:leading-[11rem]">
                         Full-Stack Developer
                         </div>
                    <div className="w-full flex justify-between items-start gap-6 md:items-center">
                        <p className="text-sm text-start md:text-xl w-1/2 md:w-1/3 text-black  manrope">
                            I build <b>fast,</b> accessible, and <b>maintainable,</b> web applications with a focus on <b>clean</b> architecture and design.
                        </p>
                        <p className="text-sm text-end md:text-xl w-1/2 md:w-1/3  text-black  manrope">
                            With a <b>deep</b> understanding of modern frameworks and best practices, I bring ideas to life through code.        </p>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default HeroSection

