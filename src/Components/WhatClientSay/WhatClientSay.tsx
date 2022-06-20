import React from "react";
import {Box} from "@mui/material";
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Title} from "../../Styles/ShopByCategories";
import iconLoading from "../../Assets/Images/icon-loading.png";
import ClientCard from "./ClientCard/ClientCard";
import {boxStyles, Container, WrapperBox} from "../../Styles/WhatClientSay";
import {data} from "./data";
import {ItemType} from "./ClientCard/Types/Item";

function WhatClientSay() {
    SwiperCore.use([Autoplay]);
    return (
        <WrapperBox>
            <Box sx={boxStyles}>
                <Title variant="h2">WHAT Client SAY</Title>
                <img className='loading' src={iconLoading}/>
                <Container>
                    <div className="swiper-button-prev"/>
                    <div className="swiper-button-next"/>
                    <Swiper
                        autoplay={{delay: 5000, disableOnInteraction: false}}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                    >
                        {data.map((item: ItemType) => {
                            return (
                                <SwiperSlide>
                                    <ClientCard item={item}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Container>
            </Box>
        </WrapperBox>
    );
}

export default WhatClientSay;
