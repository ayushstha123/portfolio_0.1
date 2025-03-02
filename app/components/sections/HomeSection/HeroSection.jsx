import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <section className="max-w-[1400px] mx-auto px-2">
                <div className="bg-gradient-to-b from-[#c39e7f] via-[#c0946d] to-[#F9F5F6] py-10 px-10 w-full rounded-4xl mt-10">
                    <h1 className="manrope text-3xl  text-center text-black pb-10">  Crafting Scalable & Modern Web Experiences</h1>
                    <div className="text-white  text-center ateoric text-[15rem] py-12 leading-[11rem]"> Full-Stack Developer </div>
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

