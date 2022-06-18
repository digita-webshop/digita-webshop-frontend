import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import SliderCard from "../SliderCard/SliderCard";
import {shopByCat} from "./shopByCat";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import navigationIcon from "../../../Assets/Icons/right-arrow.svg";

const Slider = () => {

    const Container = styled(Box)(({theme}) => ({
        position: 'relative',
        ".swiper": {
            transform: 'translateX(10px)',
            paddingBottom: '73px',
            maxWidth: '1200px',
        },
        ".swiper-pagination-bullet": {
            background: 'white',
            opacity: 1,
            margin: '10px!important'
        },
        ".swiper-horizontal>.swiper-pagination-bullets": {
            bottom: '0'
        },
        ".swiper-pagination-bullet-active": {
            position: 'relative',
            '&::before': {
                animation: 'spin-dot 2s linear infinite',
                top: '-110%',
                left: '-110%',
                borderRadius: '50%',
                position: 'absolute',
                content: '""',
                width: '22px',
                height: '22px',
                borderRight: ' 2px solid white',
                borderLeft: '2px solid transparent',
                borderTop: '2px solid white',
                borderBottom: '2px solid white',
            }
        },
        ".swiper-button-next,.swiper-button-prev": {
            border: '1px solid rgba(255, 255, 255, 0.3)',
            width: '43px',
            height: '43px',
            '&::after': {
                backgroundImage: `url(${navigationIcon})`,
                backgroundSize: "contain",
                opacity: "0.3",
                width: '24px',
                height: '24px',
                content: '""'
            },
            "&:hover": {
                border: '1px solid rgba(255, 255, 255, 1)',
                '&:after': {
                    opacity: "1",
                }
            }
        },
        '.swiper-button-next': {
            right: '-60px',
            top: '40%',
        },
        ".swiper-button-prev": {
            left: '-60px',
            top: '40%',
            transform: ' scale(-1, 1)'
        },
    }))

    return (
        <Container>
            <div className="swiper-button-prev"/>
            <div className="swiper-button-next"/>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                slidesPerGroup={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation]}
            >
                {shopByCat.map((item) => {
                    return <SwiperSlide><SliderCard key={item.id} item={item}/></SwiperSlide>
                })}
            </Swiper>
        </Container>
    );
};

export default Slider;