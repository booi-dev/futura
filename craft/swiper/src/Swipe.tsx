import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

function Swipe() {
  const breakpoints = {
    // When window width is >= 576px
    576: {
      slidesPerView: 2,
    },

    // When window width is >= 768px
    768: {
      slidesPerView: 3,
    },

    // When window width is >= 992px
    992: {
      slidesPerView: 4,
    },
  };

  return (
    <div className="swiper-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        // navigation
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="swiper-card">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swiper-card">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swiper-card">Slide 1</div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swiper-card">Slide 1</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swipe;
