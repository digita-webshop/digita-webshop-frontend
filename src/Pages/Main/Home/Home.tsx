import {
  Products,
  Special,
  Header,
  ShopByCategories,
  WhatClientSay,
  OurBlog,
} from "../../../Components";
import Loading from "../../../Components/Loading/Loading";
import { useGetAllArticlesQuery } from "../../../features/articles/articlesApi";
import { useGetAllProductsQuery } from "../../../features/products/productsApi";

function Home() {
  const { data: articles } = useGetAllArticlesQuery();

  return (
    <>
      <Header />
      <Products />
      <ShopByCategories />
      <Special />
      <WhatClientSay />
      <OurBlog articles={articles?.data!} />
    </>
  );
}

export default Home;
