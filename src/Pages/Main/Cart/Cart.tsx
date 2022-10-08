import React from "react";
import { Breadcrumbs } from "../../../components";
import { Cart } from "../../../components";
const CartPage = () => {
  return (
    <>
      <Breadcrumbs title={"cart"} />
      <Cart />
    </>
  );
};

export default CartPage;
