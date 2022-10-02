import React from "react";
import { Breadcrumbs } from "../../../Components";
import { Cart } from "../../../Components";
const CartPage = () => {
  return (
    <>
      <Breadcrumbs title={"cart"} />
      <Cart />
    </>
  );
};

export default CartPage;
