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
  const { data: products, isLoading } = useGetAllProductsQuery();
  const { data: articles } = useGetAllArticlesQuery();
  console.log(products);
  if (isLoading) {
    return <Loading full />;
  }
  return (
    <>
      <Header />
      <Products products={products?.data!} />
      <ShopByCategories />
      <Special products={products?.data!} />
      <WhatClientSay />
      <OurBlog articles={articles?.data!} />
    </>
  );
}

export default Home;
