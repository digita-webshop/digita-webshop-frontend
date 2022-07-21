


import{Grid ,Button , Box ,Container}  from '@mui/material';

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCart/ProductCart"
import { ProductSliderData } from "./data";
import Slider from "./Slider/Slider"
import "swiper/css/bundle";
import { useInView } from "react-intersection-observer";

function ProductSlider() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
    <Box   maxWidth={"xl"}
      ref={ref}
      className={inView ? "slideInFromBottom" : ""}>
    <Swiper
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-blog",
              prevEl: ".swiper-button-prev-blog",
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {ProductSliderData.map((item) => {
              return (
                <SwiperSlide>
                  <ProductCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
      </Box>
    </>
  );
}

export default ProductSlider;
