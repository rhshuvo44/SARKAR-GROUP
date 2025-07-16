import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Autoplay, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LatestProjectData from "../jsonData/LatestProjectData.json";
import SingleLatestProject from "./SingleLatestProject";

const LatestProject = ({project}) => {
  const location = useLocation();
  return (
    <>
      <section className="latest-project-sec pt-100 pb-70">
        <div className="container">
          <div className="row latest-project-title-sec">
            <div className="col-md-4">
              <div className="latest-project-title">
                <span>Latest Projects</span>
                <h1>{project.title} Project</h1>
              </div>
            </div>
            <div className="col-md-5">
              <div className="latest-project-subtitle">
                <p>
                  Under the visionary leadership of the Founder and Chairman,
                  <b>MD SHAH ALAM</b>, Sarkar Group and its subsidiaries have
                  become one of the most renowned Shipping and Logistics service
                  providers in Bangladesh.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="latest-project-button">
                {location.pathname === "/" && (
                  <Link to="project">
                    View All Project
                    <i className="icofont-long-arrow-right"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              modules={[Keyboard, Autoplay]}
              slidesPerView={4}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                220: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {LatestProjectData.map((project) => (
                <SwiperSlide key={project.id}>
                  <SingleLatestProject project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* {LatestProjectData.map((project) => (
              <div className="col-lg-3 col-md-6" key={project.id}>
                <SingleLatestProject project={project} />
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProject;
