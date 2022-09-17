import React from "react";
import { Breadcrumbs } from "../../../Components";
import ShoppingCart from "../../../Components/ShoppingCart/ShoppingCart";
const Cart = () => {

  return (
    <>
      <Breadcrumbs title={"cart"} />
      <ShoppingCart />
    </>
  );
};

export default Cart;
