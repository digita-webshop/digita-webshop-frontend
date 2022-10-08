import { Close, East, West, ZoomIn } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { EffectFade, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  galleryModalButtonStyles,
  GalleryModalWrapper,
  modalSwiperStyles,
} from "../../../../styles";
import ReactImageMagnify from "react-image-magnify";
import { IGallery } from "../../../../../../types/product";

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
          {gallery.map(({ _id, image }) => (
            <SwiperSlide key={_id}>
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
                    width: 850,
                    height: 900,
                  },
                  enlargedImagePosition: "over",
                  hoverDelayInMs: 0,
                  hoverOffDelayInMs: 0,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </GalleryModalWrapper>
  );
}

export default GalleryModal;
