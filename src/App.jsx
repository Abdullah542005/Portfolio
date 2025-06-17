import { useEffect, useState } from "react";
import BlurText from "./AnimationComponents/BlurText/BlurText";
import Particles from "./AnimationComponents/Particle";
import StartAnimation from "./AnimationComponents/StartAnimation";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero Section/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Project";
import ProjectView from "./Components/Projects/ProjectView";
import Skills from "./Components/Skills/Skills";


function App() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    function measureHeight() {
      const tHeight = document.documentElement.scrollHeight;
      const vHeight = window.innerHeight;
      const scrolled = window.scrollY;
      setScreenHeight((scrolled / (tHeight - vHeight)) * 100);
    }
    measureHeight();
    addEventListener("scroll", measureHeight);
    return () => removeEventListener("scroll", measureHeight);
  }, []);

  return (
    <div className="App">
      <ProjectView />
      <StartAnimation />
      <h1 className="FontHead Hemail">abdullahImran542005@gmail.com</h1>
      <div className="ScrollBar">
        <div style={{ height: `${screenHeight}%` }}></div>
      </div>
      <div className="AppBackGround1">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>
      <Navbar />
      <Hero />

      <div className="AMidSec">
        <BlurText
          text="From Requirements Engineering to a Well Structured code, I make sure every Component aligns with purpose."
          delay={150}
          animateBy="words"
          direction="top"
          className="FontHead AMidText"
        />
      </div>

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
