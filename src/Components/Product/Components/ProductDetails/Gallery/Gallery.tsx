import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Box } from "@mui/material";
import {
  GallerySwiperWrapper,
  swiperImageWrapper,
} from "../../../../../Styles/Product";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
interface IGallery {
  id: number;
  image: string;
}
interface Props {
  gallery: IGallery[];
}
export default function Gallery({ gallery }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const mainSwiperRef = useRef(null) as any;

  const sliderClickHandler = (index: number) => () => {
    mainSwiperRef.current.swiper.slideTo(index);
    setSlideIndex(index);
  };
  return (
    <>
      <Box>
        <Swiper
          initialSlide={slideIndex}
          allowTouchMove={false}
          onInit={(core: any) => {
            mainSwiperRef.current = core.el;
          }}
        >
          {gallery.map(({ id, image }) => (
            <SwiperSlide key={id}>
              <Box sx={swiperImageWrapper}>
                <img src={image} alt="slider-img" />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <GallerySwiperWrapper>
        <div className="gallery-swiper-button-prev">
          <ChevronLeft />
        </div>
        <div className="gallery-swiper-button-next">
          <ChevronRight />
        </div>
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".gallery-swiper-button-next",
            prevEl: ".gallery-swiper-button-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {gallery.map(({ id, image }, index) => (
            <SwiperSlide key={id}>
              <Box onClick={sliderClickHandler(index)}>
                <img
                  src={image}
                  alt="slider-img"
                  className={`slider-img ${
                    index === slideIndex && "selected-slide"
                  }`}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </GallerySwiperWrapper>
    </>
  );
}
