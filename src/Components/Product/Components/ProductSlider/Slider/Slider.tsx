import React from 'react';
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSliderData } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from "@mui/material/Modal";
import{Grid ,Button , Box ,Typography,Container,}  from '@mui/material';
import "./styles.css";
import SliderModal from "../../Modals/SliderModal/SliderModal"
// import required modules
import { Zoom, Navigation, Pagination } from "swiper";


const Slider = () => {
  const [openSliderModal, setOpenSliderModal] = useState(false);

  const handleCloseSliderModal = () => setOpenSliderModal(false);
    return (
      <>
      <Button variant="contained"     onClick={() => setOpenSliderModal(true)}>Add To Cart</Button>
      <Modal
  open={openSliderModal}
  onClose={handleCloseSliderModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    <SliderModal />
</Modal>
      <Swiper
       
        zoom={true}
        
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div >
          
          </div>
        </SwiperSlide>
       
        
       
        
      
       
        
      
      </Swiper>
      </>

    );
};

export default Slider;