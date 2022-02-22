import "./Assets/App.css";
import SideBar from "./SideBar";
import About from "./About.js";
import Projects from "./Projects.js";
import React, { useRef } from 'react'
import Interests from './Interests.js'
// import Showcase from './Showcase.js'
import AboutBio from './AboutBio.js'
import Footer from './Footer.js'
import Fade from "react-reveal/Fade";





function App() {
  return (
    <div id="zero">
      <SideBar />
      <div className="flex flex-col h-full ml-16 md:px-20 min-h-screen items-center justify-center">
          <About/>
       </div>
        <section id="first">
        <Fade bottom>
        <div className="m-h-screen ml-24 mt-8 mb-8">
          <AboutBio />
       </div>
       </Fade>
        </section>
        <section id="second">
        <Fade>

        <div className="m-h-screen md:ml-24 mt-8 mb-8">
          <Projects />
       </div>
       </Fade>
        </section>
        <section id="footer">
        <div className="m-h-screen px-4 md:px-0 md:ml-24 mt-8 mb-8">
          <Footer />
       </div>
        </section>
    </div>
  );
}

export default App;
