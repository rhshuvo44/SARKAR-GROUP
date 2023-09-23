import React from "react";
import { useSwiper } from "swiper/react";

const SwiperCustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="swiper-nav-buttons">
        <button className="previous" onClick={() => swiper.slidePrev()}>
          <i className="icofont-long-arrow-left"></i>
        </button>
        <button className="next" onClick={() => swiper.slideNext()}>
          <i className="icofont-long-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default SwiperCustomNavigation;
