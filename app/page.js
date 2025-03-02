import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-[1400px] mx-auto px-2">
      <div className="bg-[#c1a68f] py-10 px-10 w-full rounded-4xl mt-10">
        <h1 className="manrope text-3xl  text-center text-black pb-10">  Crafting Scalable & Modern Web Experiences</h1>
        <div className="text-white text-center ateoric text-[15rem] py-12 leading-[11rem]"> Full-Stack Developer </div>
        <div className="w-full flex justify-between items-center"> 
        <p className=" text-start text-xl w-1/3 text-black  manrope">
          I build fast, accessible, and maintainable web applications with a focus on clean architecture and seamless user experiences. 
        </p>
        <p className=" text-start text-xl w-1/3 text-black  manrope">
        With a deep understanding of modern frameworks and best practices, I bring ideas to life through code.        </p>
      </div>
      </div>
    </section>
  );
}
