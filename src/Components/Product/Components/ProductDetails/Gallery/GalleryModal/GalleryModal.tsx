import { Close, East, West, ZoomIn } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { EffectFade, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  galleryModalButtonStyles,
  GalleryModalWrapper,
  modalSwiperStyles,
} from "../../../../../../Styles/Product";
import { IGallery } from "../Gallery";

interface Props {
  gallery: IGallery[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  slideIndex: number;
}

function GalleryModal({ gallery, setOpenModal, slideIndex }: Props) {
  const [page, setPage] = useState(slideIndex + 1);
  const swiperRef = useRef(null) as any;
  let total = gallery.length;

  const swiperCounter = () => {
    setPage(swiperRef.current.swiper.realIndex + 1);
  };
  return (
    <GalleryModalWrapper>
      <Box sx={galleryModalButtonStyles} onClick={() => setOpenModal(false)}>
        <Close />
      </Box>
      <Box sx={galleryModalButtonStyles}>
        <ZoomIn />
      </Box>
      <div className="modal-gallery-swiper-button-prev" onClick={swiperCounter}>
        <West />
      </div>
      <div className="modal-gallery-swiper-button-next" onClick={swiperCounter}>
        <East />
      </div>
      <Box sx={galleryModalButtonStyles} className="swiper-pagination">
        <span>{page}</span>/<span>{total}</span>
      </Box>
      <Box sx={modalSwiperStyles}>
        <Swiper
          onInit={(core: any) => {
            swiperRef.current = core.el;
          }}
          initialSlide={slideIndex}
          loop={true}
          navigation={{
            nextEl: ".modal-gallery-swiper-button-next",
            prevEl: ".modal-gallery-swiper-button-prev",
          }}
          effect={"fade"}
          modules={[EffectFade, Navigation]}
        >
          {gallery.map(({ id, image }) => (
            <SwiperSlide key={id}>
              <img src={image} alt="slider-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </GalleryModalWrapper>
  );
}

export default GalleryModal;
