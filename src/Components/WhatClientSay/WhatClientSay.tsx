import React from "react";
import { Box } from "@mui/material";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Title } from "../../Styles/ShopByCategories";
import iconLoading from "../../Assets/Images/icon-loading.png";
import ClientCard from "./ClientCard/ClientCard";
import { boxStyles, Container, WrapperBox } from "../../Styles/WhatClientSay";
import { data } from "./data";
import { ItemType } from "./ClientCard/Types/Item";
import { useInView } from "react-intersection-observer";

function WhatClientSay() {
  const { ref, inView } = useInView({ triggerOnce: true });
  SwiperCore.use([Autoplay]);

  return (
    <WrapperBox className={inView ? "slideInFromBottom" : ""} ref={ref}>
      <Box sx={boxStyles}>
        <Title variant="h2">WHAT Client SAY</Title>
        <img className="loading" src={iconLoading} alt="loading" />
        <Container>
          <div className="swiper-button-prev-client" />
          <div className="swiper-button-next-client" />
          <Swiper
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next-client",
              prevEl: ".swiper-button-prev-client",
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
          >
            {data.map((item: ItemType) => {
              return (
                <SwiperSlide key={item.id}>
                  <ClientCard item={item} />
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
