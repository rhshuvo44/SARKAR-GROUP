import React from "react";
import Counter from "./Counter";

const TestimonialCountUp = () => {
  return (
    <>
      <section className="testimonial-count-up-sec pt-100 pb-70">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6 col-md-12">
                            <div className="all-testimonial">
                                <Swiper
                                    modules={[Keyboard, Autoplay, Pagination]}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true
                                    }}
                                    loop={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                >
                                    {TestimonialV2Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV2 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div> */}

            <Counter />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialCountUp;
