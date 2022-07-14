import React, { useState, useEffect } from "react";
// import Swiper from "react-id-swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from "../slideItem/slideItem";
import SwiperCore, { Autoplay } from "swiper";

import { EffectFade, Navigation, Pagination , Lazy,
    Controller} from "swiper";

const images = [
  {
    src: "https://picsum.photos/320/240?v1"
  },
  {
    src: "https://picsum.photos/320/240?v2"
  },
  {
    src: "https://picsum.photos/320/240?v3"
  },
  {
    src: "https://picsum.photos/320/240?v4"
  }
];

const ManipulatingSwiper = () => {
  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  // Params definition
  let params = {
    modules: [Controller, Pagination, Navigation, Lazy],
    preloadImages: false,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: false,
    spaceBetween: 30,
    getSwiper: updateSwiper // Get swiper instance callback
  };
  let thumbsParams = {
    modules: [Controller],
    slideToClickedSlide: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs, // Get swiper instance callback
    style: {
      width: "100px"
    }
  };

  // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);

  return (
    <div>
      <Swiper {...params}>
        {images.map((image, idx) => (
          <SlideItem key={`slide_${idx}`} style={{ width: "100px" }}>
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              data-src={image.src}
            />
          </SlideItem>
        ))}
      </Swiper>

      <Swiper {...thumbsParams}>
        {images.map((image, idx) => (
          <SlideItem key={`slide_${idx}`} className="swiper-slide-auto">
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              // @note Ignore that the images aren't matching
              src={image.src.replace("320/240", "100/100")}
            />
          </SlideItem>
        ))}
      </Swiper>
    </div>
  );
};

export default ManipulatingSwiper;
