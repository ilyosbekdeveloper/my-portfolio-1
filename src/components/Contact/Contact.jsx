import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";
import { Fade } from "react-awesome-reveal";

const info = [
  {
    icon: faLocationDot,
    h4: "Location",
    desc: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: faEnvelope,
    h4: "Email",
    desc: "ilyosbekumirzoqov6@gmail.com",
  },
  {
    icon: faPhone,
    h4: "Phone",
    desc: "+998 99 031 69 06  /  +7 908 511 72 66",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="g_section_title">
          <h2 className="g_title">Contact</h2>
          <p className="g_par">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* contact content */}
        <div className="contact_content">
          <div className="contact_left_container">
            <Fade triggerOnce duration={1300} delay={600}>
              <div>
                {info.map((i, index) => (
                  <div key={index} className="contact_left_container_item ">
                    <div className="icon">
                      <FontAwesomeIcon icon={i.icon} />
                    </div>
                    <div>
                      <h4>{i.h4}</h4>
                      <p>{i.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="contact_left_container_item">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameborder="0"
                    style={{ border: 0, width: "100%", height: "290px" }}
                  ></iframe>
                </div>
              </div>
            </Fade>
          </div>
          <div className="contact_right_container">
            <Fade triggerOnce duration={1400} delay={500}>
              <form>
                <div className="row">
                  <label>
                    <span className="form-label">Your Name</span>
                    <input type="text" className="form-control" />
                  </label>
                  <label>
                    <span className="form-label">Email</span>
                    <input type="email" className="form-control" />
                  </label>
                </div>
                <div className="subject">
                  <label>
                    <span className="form-label">Subject</span>
                    <input type="text" className="form-control" />
                  </label>
                </div>
                <div className="message">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                {/* send datas */}
                <div className="tac">
                  <button className="contact_btn" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
