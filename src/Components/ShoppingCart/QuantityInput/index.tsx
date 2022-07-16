import { Box, TextField } from "@mui/material";
import { CustomBtn } from "../../../Styles/Cart";
import React from "react";
import CartItem from "../Types/CartItemType";
import store from "../../../redux/store";
import actions from "../../../redux/actions";
import { useSelector } from "react-redux";

type Props = {
  updateButtonDisabled: boolean;
  setUpdateButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  row: CartItem;
  cartList: any;
  values: CartItem[];
  setValues: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const QuantityInput = ({
  setUpdateButtonDisabled,
  row,
  values,
  setValues,
  updateButtonDisabled,
  cartList,
}: Props) => {
  // @ts-ignore todo fix later
  const quantities = useSelector((state) => state.cartReducer.quantities);
  const quantity = quantities.filter((item: CartItem) => item.id === row.id)[0]
    .quantity;
  const handleDecValue = () => {
    if (quantity === 0) {
      return;
    }

    const clone = [...quantities];
    clone.forEach((element: CartItem, index: number) => {
      if (element.id === row.id) {
        clone[index] = { ...element, quantity: quantity - 1 };
      }
    });

    // @ts-ignore todo fix me later
    store.dispatch(actions.cart.setQuantity(clone));
    updateButtonDisabled && setUpdateButtonDisabled(false);
  };

  const handleIncValue = () => {
    const clone = [...quantities];
    clone.forEach((element: CartItem, index: number) => {
      if (element.id === row.id) {
        clone[index] = { ...element, quantity: quantity + 1 };
      }
    });

    // @ts-ignore todo fix me later
    store.dispatch(actions.cart.setQuantity(clone));
    updateButtonDisabled && setUpdateButtonDisabled(false);
  };

  return (
    <Box
      sx={{
        p: "1rem 0",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: { xs: "58px", sm: "40px", lg: "58px" },
          border: "1px solid #e4e4e4",
        }}
      >
        <Box
          sx={CustomBtn}
          style={{ borderRight: "1px solid #e4e4e4" }}
          onClick={handleDecValue}
        >
          -
        </Box>
        <TextField
          id="outlined-number"
          type="number"
          value={quantity}
          sx={{
            width: { xs: "58px", sm: "40px", lg: "58px" },
            height: { xs: "58px", sm: "40px", lg: "58px" },
            "& .MuiInputBase-root": {
              height: "100%",
              borderRadius: "0",
            },
            "& .MuiInputBase-input": {
              textAlign: "center",
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            input: {
              "&::-webkit-inner-spin-button": { appearance: "none" },
            },
          }}
          size="small"
        />
        <Box
          sx={CustomBtn}
          onClick={handleIncValue}
          style={{ borderLeft: "1px solid #e4e4e4" }}
        >
          +
        </Box>
      </Box>
    </Box>
  );
};

export default QuantityInput;
