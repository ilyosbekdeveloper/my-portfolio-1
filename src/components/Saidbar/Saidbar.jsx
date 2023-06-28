import React from "react";
import "./Saidbar.scss";
import PortfolioImage from "../../assets/images/20220817_170201.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faProjectDiagram,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faFile,
  faFolderOpen,
  faUser,
} from "@fortawesome/fontawesome-free-regular";
import { Link } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";

// saidbar links
const saidbarLinks = [
  {
    link: "#",
    icon: faTwitter,
  },
  {
    link: "#",
    icon: faInstagram,
  },
  {
    link: "#",
    icon: faFacebook,
  },
  {
    link: "#",
    icon: faSkype,
  },
  {
    link: "#",
    icon: faLinkedinIn,
  },
];
// saidbar section
const saidbarSections = [
  {
    link: "header",
    title: "Home",
    icon: faHouse,
  },
  {
    link: "about",
    title: "About",
    icon: faUser,
  },
  {
    link: "resume",
    title: "Resume",
    icon: faFile,
  },
  {
    link: "portfolio",
    title: "Portfolio",
    icon: faFolderOpen,
  },
  {
    link: "services",
    title: "Services",
    icon: faServer,
  },
  {
    link: "projects",
    title: "Projects",
    icon: faProjectDiagram,
  },
  {
    link: "contact",
    title: "Contact",
    icon: faEnvelope,
  },
];

const Saidbar = () => {
  return (
    <div className="saidbar">
        <Fade triggerOnce duration={1000}>
        <div className="saidbar_img">
          <img src={PortfolioImage} />
        </div>
        <h2>
          <a href="#">Ilyosbek Umirzokov</a>
        </h2>
        <div className="saidbar_links">
          {saidbarLinks.map((i) => (
            <a href={i.link}>
              <FontAwesomeIcon icon={i.icon} />
            </a>
          ))}
        </div>
        {/* sections */}
        <ul className="saidbar_sections">
          {saidbarSections.map((i, index) => (
            <Slide key={index} direction="down" delay={index * 40}>
              <li>
                <Link
                  to={i.link}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FontAwesomeIcon icon={i.icon} />
                  <span>{i.title}</span>
                </Link>
              </li>
            </Slide>
          ))}
        </ul>

        {/* saidbar footer */}
        <div className="saidbar_footer">
          <div className="saidbar_footer_title">
            <span>© Copyright </span>
            <strong>iPortfolio</strong>
          </div>
          <p className="saidbar_footer_description">
            <span>Designed by </span>
            <a href="#">BootstrapMade</a>
          </p>
        </div>
    </Fade>
      </div>
  );
};

export default Saidbar;
