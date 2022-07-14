import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "./slider/slider";
import "react-id-swiper/src/styles/scss/swiper.scss";

import{Grid ,TextField,Button }  from '@mui/material';


const ProductSlider = () => {
 return(
  <>
  <div className="App">
    <section className="section">
      <div className="container header">
        <h1 className="title">React Id Swiper dynamic slides w lazy load</h1>
        <h3 className="subtitle">
          Adds lazy load support to swiper implementation
        </h3>
      </div>
      <div className="container">
        <Slider />
      </div>
    </section>
  </div>
  </>
 )
};

export default ProductSlider;