import { Container } from "@mui/material";
import { Title } from "../ShopByCategories/styles";
import iconLoading from "@/assets/Images/icon-loading.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard/BlogCard";
import { ContainerWrapper, WrapperBox } from "./styles";
import { useInView } from "react-intersection-observer";
import { useGetAllArticlesQuery } from "@/redux/articles/articlesApi";
import ArticlePlaceholder from "@/components/Placeholders/ArticlePlaceholder";

function OurBlog() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { data, isLoading, isError } = useGetAllArticlesQuery("");
  const articles = data?.data ?? [];

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
            {!isLoading && !isError
              ? articles.map((item) => (
                  <SwiperSlide key={item._id!}>
                    <BlogCard item={item} />
                  </SwiperSlide>
                ))
              : Array(6)
                  .fill(null)
                  .map((item, index) => (
                    <SwiperSlide key={index}>
                      <ArticlePlaceholder />
                    </SwiperSlide>
                  ))}
          </Swiper>
          <div className="swiper-button-prev-blog" />
          <div className="swiper-button-next-blog" />
        </WrapperBox>
      </Container>
    </ContainerWrapper>
  );
}

export default OurBlog;
