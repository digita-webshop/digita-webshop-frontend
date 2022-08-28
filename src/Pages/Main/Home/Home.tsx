import {
  Products,
  Special,
  Header,
  ShopByCategories,
  WhatClientSay,
  OurBlog,
} from "../../../Components";
import { useGetAllProductsQuery } from "../../../features/products/productsApi";

function Home() {
  const { data } = useGetAllProductsQuery();
  console.log(data);

  return (
    <>
      <Header />
      <Products />
      <ShopByCategories />
      <Special />
      <WhatClientSay />
      <OurBlog />
    </>
  );
}

export default Home;
