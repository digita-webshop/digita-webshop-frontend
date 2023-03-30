import { Helmet } from "react-helmet-async";
import { Products, Special, Header, ShopByCategories, WhatClientSay, OurBlog } from "components/Home";

function Home() {
  return (
    <>
      <Helmet>
        <title>Digita Online Shop </title>
      </Helmet>
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
