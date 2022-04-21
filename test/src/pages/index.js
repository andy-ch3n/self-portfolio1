import * as React from "react"
import "../Assets/App.css"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SideBar from "../components/SideBar"
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import AboutBio from "../components/AboutBio.js";
import Footer from "../components/Footer.js";
import Fade from "react-reveal/Fade";



const IndexPage = () => {
  return (
    <div id="zero">
      <SideBar />
      <div className="flex flex-col h-full ml-16 md:px-20 min-h-screen items-center justify-center">
        <About />
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
  )
}

export default IndexPage
