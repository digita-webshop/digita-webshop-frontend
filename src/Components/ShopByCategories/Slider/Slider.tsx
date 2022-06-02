import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "../Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={4}
      spaceBetween={0}
      navigation
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
