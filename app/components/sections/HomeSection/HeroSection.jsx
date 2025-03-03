'use client'
import React from 'react'
import {easeIn, motion,useScroll, useTransform} from 'framer-motion'
const HeroSection = () => {
    const { scrollY } = useScroll()
    const marginLeft=useTransform(scrollY,[0,500],[0,200])

    return (
        <div>
            <section className="max-w-[1400px] mx-auto px-2 flex items-center justify-center">
                <div className="bg-gradient-to-b from-[#c39e7f]  via-[#c0946d] to-[#F9F5F6] py-10 px-5 md:px-10 w-full rounded-4xl mt-10">
                    <motion.div
                      transition={{ type: "spring", stiffness: 100 ,velocity: 2 }}

                    style={{
                        marginLeft
                    }}
                    className="manrope text-3xl  text-center text-black pb-10">  Crafting Scalable & Modern Web Experiences</motion.div>
                    <div className="text-white text-start lg:text-center ateoric text-[4.8rem] lg:text-[15rem] py-12 leading-[4rem] lg:leading-[11rem]"> Full-Stack Developer </div>
                    <div className="w-full flex justify-between items-center">
                        <p className=" text-start text-xl w-1/3 text-black  manrope">
                            I build fast, accessible, and maintainable web applications with a focus on clean architecture and seamless user experiences.
                        </p>
                        <p className=" text-end text-xl w-1/3  text-black  manrope">
                            With a deep understanding of modern frameworks and best practices, I bring ideas to life through code.        </p>
                    </div>
                </div>
            </section>
           
            
        </div>
    )
}

export default HeroSection

