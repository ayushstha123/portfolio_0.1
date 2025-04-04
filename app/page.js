import HeroSection from "./components/sections/HomeSection/HeroSection";
import About from "./components/sections/HomeSection/About";
import FalseMemoryPoster from "./components/sections/HomeSection/Explanation";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <About />
    <FalseMemoryPoster/>
    
    </div>
  );
}
