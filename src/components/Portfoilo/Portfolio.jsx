import React, { useState } from "react";
import "./Portfolio.scss";
import { faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade, Slide } from "react-awesome-reveal";

// buttons
const btns = [
  {
    title: "ALL",
  },
  {
    title: "APP",
  },
  {
    title: "CARD",
  },
  {
    title: "WEB",
  },
];

const copy = [
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg",
    title: "APP",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-2.jpg",
    title: "WEB",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-3.jpg",
    title: "APP",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-4.jpg",
    title: "CARD",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-5.jpg",
    title: "WEB",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-6.jpg",
    title: "APP",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-7.jpg",
    title: "CARD",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-8.jpg",
    title: "CARD",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-9.jpg",
    title: "WEB",
  },
];

const Portfolio = () => {
  const [isActive, setIsActive] = useState(0);
  // products
  const [products, setProducts] = useState([
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg",
      title: "APP",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-2.jpg",
      title: "WEB",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-3.jpg",
      title: "APP",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-4.jpg",
      title: "CARD",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-5.jpg",
      title: "WEB",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-6.jpg",
      title: "APP",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-7.jpg",
      title: "CARD",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-8.jpg",
      title: "CARD",
    },
    {
      img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-9.jpg",
      title: "WEB",
    },
  ]);
  // functions

  const toggleActive = (index) => {
    if (index === 0) {
      setProducts(copy);
    } else if (index == 1) {
      setProducts(copy.filter((i) => i.title === "APP"));
    } else if (index == 2) {
      setProducts(copy.filter((i) => i.title === "CARD"));
    } else if (index == 3) {
      setProducts(copy.filter((i) => i.title === "WEB"));
    }
    setIsActive(index);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="g_tiltle_section">
          <h2 className="g_title">Portfolio</h2>
          <p className="g_par">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* portfolio section content */}
        <div className="portfolio_content">
          <div className="d-flex aic jcc">
            <ul className="portfolio_btns">
              {btns.map((i, index) => (
                <li
                  className={`portfolio_btn ${isActive === index && "active"}`}
                  onClick={() => toggleActive(index)}
                >
                  {i.title}
                </li>
              ))}
            </ul>
          </div>

          {/* products */}
          <div className="products_section">
            {products.map((i, index) => (
              <Slide
                key={index}
                direction="up"
                triggerOnce
                duration={1200}
                delay={index * 100}
              >
                <Fade triggerOnce duration={1000} delay={index * 100}>
                  <div className="product">
                    <div className="product_img">
                      <img
                        src={i.img}
                        alt="this was images"
                        className="w-100"
                      />
                    </div>

                    <div className="product_links">
                      <div className="product_link">
                        <FontAwesomeIcon icon={faLink} />
                      </div>
                      <div className="product_link">
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </Fade>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
