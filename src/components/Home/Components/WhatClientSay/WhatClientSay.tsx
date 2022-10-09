import { Box } from "@mui/material";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Title } from "../ShopByCategories/styles";
import { boxStyles, Container, WrapperBox } from "./styles";
import { useInView } from "react-intersection-observer";
import { useGetAllReviewsQuery } from "../../../../redux/reviews/reviewsApi";
import ClientCard from "./ClientCard/ClientCard";

function WhatClientSay() {
  const { ref, inView } = useInView({ triggerOnce: true });
  SwiperCore.use([Autoplay]);

  const {
    data: reviewsData,
    isLoading,
    isError,
  } = useGetAllReviewsQuery({
    path: "products",
    queries: "page=1 &limit=4",
  });
  const reviews = reviewsData?.data ?? [];
  return (
    <WrapperBox className={inView ? "slideInFromBottom" : ""} ref={ref}>
      <Box sx={boxStyles}>
        <Title variant="h2">WHAT Client SAY</Title>
        <img
          className="loading"
          src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1665232874/digita-images/static/uej2dnhrgldg1jaztexn.png"
          alt="loading"
        />
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
            {!isError &&
              !isLoading &&
              reviews.map((review) => {
                return (
                  <SwiperSlide key={review._id}>
                    <ClientCard review={review} />
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
