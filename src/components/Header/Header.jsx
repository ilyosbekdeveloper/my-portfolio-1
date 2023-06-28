import React from "react";
import "./Header.scss";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="header_content">
        <Fade triggerOnce>
          <div>
            <h2 className="header_title">Ilyosbek Umirzokov</h2>
            <span>I'm </span>
            <span className="hero">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Designer",
                  "Freelancer",
                ]}
                loop={100}
                cursor
                cursorStyle="|"
              />
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
