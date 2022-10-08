import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SliderCard from "../SliderCard/SliderCard";
import { shopByCat } from "./data";
import { Container } from "./styles";

const Slider = () => {
  return (
    <Container>
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {shopByCat.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SliderCard key={item.id} item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Slider;
