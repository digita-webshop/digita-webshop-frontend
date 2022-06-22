import { Container } from "@mui/material";
import { Title } from "../../Styles/ShopByCategories";
import iconLoading from "../../Assets/Images/icon-loading.png";
import { Navigation, Pagination } from "swiper";
import { ourBlogData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard/BlogCard";
import { ContainerWrapper, WrapperBox } from "../../Styles/OurBlog";

function OurBlog() {
  return (
    <ContainerWrapper maxWidth={"lg"}>
      <Title variant="h2" sx={{ color: "#333" }}>
        OUR BLOG
      </Title>
      <img className="loading" src={iconLoading} alt="blog-bg" />
      <Container>
        <WrapperBox>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-blog",
              prevEl: ".swiper-button-prev-blog",
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {ourBlogData.map((item) => {
              return (
                <SwiperSlide>
                  <BlogCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-prev-blog" />
          <div className="swiper-button-next-blog" />
        </WrapperBox>
      </Container>
    </ContainerWrapper>
  );
}

export default OurBlog;
