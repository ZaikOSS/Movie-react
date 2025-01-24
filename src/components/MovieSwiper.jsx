import React from "react";
import "./movieSwiper.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiper({ slides = [], slideChange }) {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3} // Show 3 slides at once
      spaceBetween={30} // Space between slides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide._id || index}>
          <div className="movie-slide">
            <img
              src={slide.previewImg}
              alt="Preview image"
              onClick={() => slideChange(slide._id)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
