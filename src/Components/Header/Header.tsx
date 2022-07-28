import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { ShopNowBtn, SlideItem, Container } from "../../Styles/Header";
import { headerData } from "./data";

const Header = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Container>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        navigation
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {headerData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <SlideItem>
                  <div className={item.bgClass} />
                  {isActive && (
                    <div className="header">
                      <span className="header-title">{item.title}</span>
                      <p className="header-subtitle">{item.subTitle}</p>
                      {item.desc}
                      <ShopNowBtn variant="contained">
                        {item.btnText}
                      </ShopNowBtn>
                    </div>
                  )}
                </SlideItem>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Header;
