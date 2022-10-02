import React from "react";
import { Breadcrumbs } from "../../../Components";
import { Cart as CartPage } from "../../../Components";
const Cart = () => {
  return (
    <>
      <Breadcrumbs title={"cart"} />
      <CartPage />
    </>
  );
};

export default Cart;
