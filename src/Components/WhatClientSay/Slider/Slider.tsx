import React, { useRef, useState } from "react";
// lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// component
import ClientCard from "../ClientCard/ClientCard";

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={150}
        centeredSlides={true}
        autoplay={{
          delay: 40000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ClientCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClientCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

{
}
