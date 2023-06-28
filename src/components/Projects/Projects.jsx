import React from "react";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/fontawesome-free-regular";
import { Animated } from "react-animated-css";

const projects = [
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
  {
    title: "Project - ",
    href: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="g_section_title">
          <h2 className="g_title">Projects</h2>
          <p className="_g_par">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            architecto voluptatibus consectetur, officia incidunt aut rerum
            quidem alias accusamus hic omnis debitis nam, labore expedita?
          </p>
        </div>
        <div className="projects_content">
          {projects.map((i, index) => (
            <a key={index} href={i.href} className="project">
              <Animated
                animationIn={`${
                  index === 0
                    ? "flash"
                    : index === 1
                    ? "fadeInDown"
                    : index === 2
                    ? "bounce"
                    : index === 3
                    ? 'tada'
                    : index === 4
                    ? 'jello'
                    : index === 5
                    ? "fadeIn"
                    : index === 6
                    ? 'tada'
                    : index === 7
                    ? 'swing'
                    : index === 8
                    ? 'flash'
                    : ''
                }`}
                animationOut="fadeOut"
                isVisible={true}
              >
                <h4>{i.title + `${index + 1}`}</h4>
                <div className="icon">
                  <FontAwesomeIcon
                    style={{ transform: "rotate(45deg)" }}
                    icon={faArrowAltCircleUp}
                  />
                </div>
              </Animated>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
