import React from "react";
import "./Testimonials.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Slide } from "react-awesome-reveal";

const testimonials = [
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-1.jpg",
    par: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Saul Goodmon",
    work: "Geo & Funter",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-2.jpg",
    par: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    name: "Sara Willson",
    work: "Designer",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-3.jpg",
    par: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    name: "Jena Karlis",
    work: "Store Owner",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-4.jpg",
    par: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    name: "Mat Brandon",
    work: "Freelancer",
  },
  {
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-5.jpg",
    par: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    name: "John Larson",
    work: "Entreprenuer",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="g_title_section">
          <h2 className="g_title">Testimonials</h2>
          <p className="g_par">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* testimonials_content */}
        <div className="testimonials_content">
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            loop
            autoplay
            speed={1000}
          >
            {testimonials.map((i, index) => (
              <SwiperSlide key={index}>
                <Slide
                  direction="up"
                  triggerOnce
                  duration={1300}
                  delay={index * 80}
                >
                  <div className="testimonial">
                    <p>{i.par}</p>
                    <img src={i.img} alt="this was image" />
                    <h3>{i.name}</h3>
                    <h4>{i.work}</h4>
                  </div>
                </Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
