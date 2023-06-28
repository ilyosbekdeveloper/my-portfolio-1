import React from "react";
import Saidbar from "../Saidbar/Saidbar";
import Header from "../Header/Header";
import About from "../About/About";
import Facts from "../Facts/Facts";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfoilo/Portfolio";
import Services from "../Servicess/Services";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
// styles
import "./home.scss";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <>
      <div id="home" className="home_flex">
        <div className="float_right">
          {/* saidbar */}
          <Saidbar />
        </div>
        <div className="float_left">
          {/* Header */}
          <Header />

          {/* about section */}
          <About />
          {/* facts section */}
          <Facts />
          {/* skills section */}
          <Skills />
          {/* resume section  */}
          <Resume />
          {/* portfolio section */}
          <Portfolio />
          {/* services section */}
          <Services />
          {/* testimonials section */}
          <Testimonials />
          {/* my projects */}
          <Projects />
          {/* contact section */}
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
