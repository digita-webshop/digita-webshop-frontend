import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Box, Modal } from "@mui/material";
import {
  GallerySwiperWrapper,
  magnifyButtonStyles,
  swiperImageWrapper,
} from "../../../../../Styles/Product";
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";
import GalleryModal from "./GalleryModal/GalleryModal";
export interface IGallery {
  id: number;
  image: string;
}
interface Props {
  gallery: IGallery[];
}
export default function Gallery({ gallery }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const mainSwiperRef = useRef(null) as any;

  const sliderClickHandler = (index: number) => () => {
    mainSwiperRef.current.swiper.slideTo(index);
    setSlideIndex(index);
  };
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box sx={magnifyButtonStyles} onClick={() => setOpenModal(true)}>
          <Search />
        </Box>
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
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{ "& .MuiBackdrop-root": { backgroundColor: "rgba(0,0,0,0.85)" } }}
      >
        <GalleryModal
          gallery={gallery}
          setOpenModal={setOpenModal}
          slideIndex={slideIndex}
        />
      </Modal>
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