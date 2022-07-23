import { Close, East, West, ZoomIn } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { EffectFade, Navigation, Pagination } from "swiper";
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
  return (
    <GalleryModalWrapper>
      <Box sx={galleryModalButtonStyles} onClick={() => setOpenModal(false)}>
        <Close />
      </Box>
      <Box sx={galleryModalButtonStyles}>
        <ZoomIn />
      </Box>
      <div className="modal-gallery-swiper-button-prev">
        <West />
      </div>
      <div className="modal-gallery-swiper-button-next">
        <East />
      </div>
      <Box sx={galleryModalButtonStyles} className="swiper-pagination"></Box>
      <Box sx={modalSwiperStyles}>
        <Swiper
          initialSlide={slideIndex}
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
