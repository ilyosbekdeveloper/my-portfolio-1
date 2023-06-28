import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide } from "react-awesome-reveal";

// datas
const aboutMeDatas1 = [
  {
    title: "Birthday",
    par: "9 sep 2006",
  },
  {
    title: "Website",
    par: "www.example.com",
  },
  {
    title: "Phone",
    par: "+998 99 031 69 06",
  },
  {
    title: "City",
    par: "Uzbekistan Samarkand",
  },
];
const aboutMeDatas2 = [
  {
    title: "Age",
    par: "17",
  },
  {
    title: "Degree",
    par: "Master",
  },
  {
    title: "PhEmailone",
    par: "ilyosbekumirzoqov6@gmail.com",
  },
  {
    title: "Freelance",
    par: "Avaliable",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <Fade triggerOnce duration={1200}>
        <div className="container">
          <div className="g_section_title">
            <h2 className="g_title">About</h2>
            <p className="g_par">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="about_section_content">
            <div className="about_section_content_img">
              <Slide triggerOnce duration={1300}>
                <img
                  src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg"
                  className="w-100"
                />
              </Slide>
            </div>
            <div className="about_me_section">
              <div>
                <Slide triggerOnce direction="right" duration={1300}>
                  <div>
                    <h2 className="about_me_section_title">Web Developer.</h2>
                    <p className="about_me_section_description g_par">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    {/* datas about me */}
                    <div className="about_me_datas">
                      <ul>
                        {aboutMeDatas1.map((i, index) => (
                          <li key={index}>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <strong>{i.title}: </strong>
                            <span>{i.par} </span>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {aboutMeDatas2.map((i, index) => (
                          <li key={index}>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <strong>{i.title}: </strong>
                            <span>{i.par} </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="g_par about_section_par">
                      Officiis eligendi itaque labore et dolorum mollitia
                      officiis optio vero. Quisquam sunt adipisci omnis et ut.
                      Nulla accusantium dolor incidunt officia tempore. Et eius
                      omnis. Cupiditate ut dicta maxime officiis quidem quia.
                      Sed et consectetur qui quia repellendus itaque neque.
                      Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
                      repellendus omnis culpa magni laudantium dolores.
                    </p>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
