import { Container } from "@mui/material";
import { Title } from "../../Styles/ShopByCategories";
import iconLoading from "../../Assets/Images/icon-loading.png";
import { Navigation, Pagination } from "swiper";
import { ourBlogData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard/BlogCard";
import { ContainerWrapper, WrapperBox } from "../../Styles/OurBlog";
import { useInView } from "react-intersection-observer";
import { articlesBlogPage } from "../../Services/Utils/Data/data";
import { useGetAllArticlesQuery } from "../../features/articles/articlesApi";

function OurBlog() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { data } = useGetAllArticlesQuery();
  console.log(data);

  return (
    <ContainerWrapper
      maxWidth={"xl"}
      ref={ref}
      className={inView ? "slideInFromBottom" : ""}
    >
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
            {articlesBlogPage.slice(1, 6).map((item) => {
              return (
                <SwiperSlide key={item.id}>
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
