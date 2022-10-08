import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Box, Modal, useMediaQuery, useTheme } from "@mui/material";
import {
  GallerySwiperWrapper,
  magnifyButtonStyles,
  mainSwiperWrapper,
  swiperImageWrapper,
} from "../../../styles";
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";
import GalleryModal from "./GalleryModal/GalleryModal";
import ReactImageMagnify from "react-image-magnify";
import { IGallery } from "../../../../../types/product";

interface Props {
  gallery: IGallery[];
}
export default function Gallery({ gallery }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const mainSwiperRef = useRef(null) as any;

  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  const sliderClickHandler = (index: number) => () => {
    mainSwiperRef.current.swiper.slideTo(index);
    setSlideIndex(index);
  };
  return (
    <>
      <Box sx={mainSwiperWrapper}>
        <Box
          sx={magnifyButtonStyles}
          className={matchesMd ? "" : "hidden"}
          onClick={() => setOpenModal(true)}
        >
          <Search />
        </Box>
        <Swiper
          initialSlide={slideIndex}
          allowTouchMove={!matchesMd}
          onInit={(core: any) => {
            mainSwiperRef.current = core.el;
          }}
          pagination={{
            dynamicBullets: matchesMd ? false : true,
          }}
          modules={matchesMd ? [] : [Pagination]}
        >
          {gallery.map(({ _id, image }) => (
            <SwiperSlide key={_id}>
              <Box sx={swiperImageWrapper}>
                {matchesMd ? (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "product slider image",
                        isFluidWidth: true,
                        src: image,
                        srcSet: image,
                        sizes:
                          "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                      },
                      largeImage: {
                        src: image,
                        width: 700,
                        height: 750,
                      },
                      hoverDelayInMs: 0,
                      hoverOffDelayInMs: 0,
                      enlargedImagePortalId: "myPortal",
                    }}
                  />
                ) : (
                  <img src={image} alt="slider-img" />
                )}
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
        <div>
          <GalleryModal
            gallery={gallery}
            setOpenModal={setOpenModal}
            slideIndex={slideIndex}
          />
        </div>
      </Modal>
      <GallerySwiperWrapper className={matchesMd ? "" : "hidden"}>
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
          {gallery.map(({ _id, image }, index) => (
            <SwiperSlide key={_id}>
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
