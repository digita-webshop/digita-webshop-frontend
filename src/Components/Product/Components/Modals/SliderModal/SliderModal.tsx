import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

// import {
     

    
    
//     } from "../../ProductSlider/Style";


import {  useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSliderData } from "../../ProductSlider/data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
// import required modules
import { Pagination, Navigation } from "swiper";

export default function SliderModal() {


  return (
   <>



 <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
       
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
   </>

   
  );
}
