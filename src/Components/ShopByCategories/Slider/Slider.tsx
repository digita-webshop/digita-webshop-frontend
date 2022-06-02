import React from "react";
import { Navigation, Pagination, A11y, Grid } from "swiper";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "../../Swiper/Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Slider() {
  return (
    <Swiper
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 2,
        },
        1024: {
          width: 1024,
          slidesPerView: 3,
        },
      }}
      centeredSlides={true}
      modules={[Navigation, Pagination, A11y, Grid]}
      navigation
      slidesPerView={1}
      spaceBetween={-15}
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <CategoriesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CategoriesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CategoriesCard />
      </SwiperSlide>
      <SwiperSlide>
        <CategoriesCard />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
