import React from "react";
import "./Skills.scss";
import { Fade, Slide } from "react-awesome-reveal";

const skills = [
  {
    skillName: "HTML",
    class: "skill_1 skill",
    skillPercentage: "100%",
  },
  {
    skillName: "PHP",
    class: "skill_2 skill",
    skillPercentage: "80%",
  },
  {
    skillName: "CSS",
    class: "skill_3 skill",
    skillPercentage: "80%",
  },
  {
    skillName: "JAVASCRIPT",
    class: "skill_4 skill",
    skillPercentage: "80%",
  },
  {
    skillName: "REACT",
    class: "skill_5 skill",
    skillPercentage: "70%",
  },
  {
    skillName: "REDUX",
    class: "skill_6 skill",
    skillPercentage: "55%",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="g_section_title">
          <h2 className="g_title">Skills</h2>
          <p className="g_par">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* skills content */}
        <Slide triggerOnce direction="up" duration={1600}>
          <Fade triggerOnce duration={1500}>
          <div className="skills_content">
            {skills.map((i, index) => (
              <div className={i.class}>
                <div className="skill_title d-flex aic jcsb">
                  <div className="skill_name">{i.skillName}</div>
                  <div>{i.skillPercentage}</div>
                </div>
                <div className="skill_percentage"></div>
              </div>
            ))}
          </div>
          </Fade>
        </Slide>
      </div>
    </section>
  );
};

export default Skills;
