import React from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faBriefcase,
  faListCheck,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faSun } from "@fortawesome/fontawesome-free-regular";
import { Fade, Slide } from "react-awesome-reveal";

const service = [
  {
    icon: faBriefcase,
    title: "Lorem ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    icon: faListCheck,
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
  {
    icon: faSignal,
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: faBinoculars,
    title: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    icon: faSun,
    title: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
  },
  {
    icon: faCalendar,
    title: "Eismod Tempur",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="g_title_section">
          <h2 className="g_title">Services</h2>
          <p className="g_par">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* services section content */}
        <div className="servives_content">
          {service.map((i, index) => (
            <div key={index} className="service">
              <Fade triggerOnce duration={1370}>
                <Slide
                triggerOnce
                  direction="up"
                  duration={1300}
                  delay={(index / 2) % 0 ? index * 80 : index * 90}
                >
                  <div className="d-flex">
                    <div className="service_icon">
                      <FontAwesomeIcon icon={i.icon} />
                    </div>
                    <div className="service_data">
                      <a href="#">
                        <h4 className="title">{i.title}</h4>
                      </a>
                      <p>{i.description}</p>
                    </div>
                  </div>
                </Slide>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
