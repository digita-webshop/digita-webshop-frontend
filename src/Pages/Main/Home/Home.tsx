import {
  Products,
  Special,
  Header,
  ShopByCategories,
  WhatClientSay,
  OurBlog,
} from "../../../Components";

function HomePage() {
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

export default HomePage;
