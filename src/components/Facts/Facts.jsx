import React from "react";
import "./Facts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faSmile } from "@fortawesome/fontawesome-free-regular";
import { faHeadphones, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

const facts_box = [
  {
    icon: faSmile,
    count: "232",
    strong: "Happy Clients",
    span: "consequuntur quae",
  },
  {
    icon: faNewspaper,
    count: "521",
    strong: "Projects",
    span: "adipisci atque cum quia aut",
  },
  {
    icon: faHeadphones,
    count: "1453",
    strong: "Hours Of Support",
    span: "aut commodi quaerat",
  },
  {
    icon: faUsers,
    count: "32",
    strong: "Hard Workers",
    span: "rerum asperiores dolor",
  },
];

const Facts = () => {
  return (
    <section id="facts">
      <div className="container">
        <div className="g_section_title">
          <h2 className="g_title">Fatcs</h2>
          <p className="g_par">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* fatcs content */}
        <div className="facts_content">
          {facts_box.map((i, index) => (
            <>
              <Slide triggerOnce key={index} direction="up" delay={index * 80}>
                <div className="facts_box d-flex">
                  <FontAwesomeIcon icon={i.icon} />
                  <div className="count_dec">
                    <div className="count">{i.count}</div>
                    <p className="facts_box_par">
                      <strong>{i.strong} </strong>
                      <span>{i.span}</span>
                    </p>
                  </div>
                </div>
              </Slide>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
