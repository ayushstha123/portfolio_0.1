import React from 'react';
import LetterStagger from '../../Animations/StraggerAnimation';
import FadeUpText from '../../Animations/TextFadeUp';

const HeroSection = () => {
    return (
        <div className='bg-neutral-300'>
            <section className="max-w-[1400px] mx-auto px-5 pb-10 flex items-center justify-center">
                <div className="py-10 w-full rounded-4xl mt-10">

                        <FadeUpText >
                            <p className="manrope text-sm md:text-xl text-center text-black pb-5"
                            >Crafting Scalable & Modern Web Experiences</p>
                        </FadeUpText>
               

                    <h2 className="text-black text-center nohemi text-[4rem] sm:text-[6.8rem] lg:text-[15rem] py-2 md:py-12 leading-[4rem] lg:leading-[12rem]">
                        <LetterStagger speed={30} >Creative Developer•</LetterStagger>
                    </h2>
                    <FadeUpText>
                    <div className="w-full flex justify-between items-start gap-6 md:items-center">
                        <p className="text-sm text-start md:text-xl w-1/2 md:w-1/3 text-black manrope">
                            I build fast, accessible, and maintainable web applications with a focus on clean architecture and design.
                        </p>
                        <p className="text-sm text-end md:text-xl w-1/2 md:w-1/3 text-black manrope">
                            With a deep understanding of modern frameworks and best practices, I bring ideas to life through code.
                        </p>
                    </div>
                    </FadeUpText>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
