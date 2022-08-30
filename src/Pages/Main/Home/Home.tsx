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
  // console.log(token);

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
