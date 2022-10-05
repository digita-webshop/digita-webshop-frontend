import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { CustomBtn } from "../../styles";
import { ICartItem } from "../../../../Services/Types/cart";
import { useDispatch } from "react-redux";
import { updateCart } from "@/features/cart/cartSlice";

type Props = {
  cartItem: ICartItem;
};

const QuantityInput = ({ cartItem }: Props) => {
  const [disableDecButton, setDisableDecButton] = useState(false);
  const [disableIncButton, setDisableIncButton] = useState(false);
  const dispatch = useDispatch();

  const inputClickHandler = (value: number) => () => {
    if (cartItem.quantity === 1 && value === -1) {
      setDisableDecButton(true);
      return;
    }
    if (cartItem.quantity === cartItem.productId.quantity && value === +1) {
      setDisableIncButton(true);
      return;
    }
    let updatedCartItem = { ...cartItem };
    updatedCartItem.quantity += value;

    dispatch(updateCart(updatedCartItem));
    setDisableDecButton(false);
    setDisableIncButton(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        border: "1px solid #e4e4e4",
      }}
    >
      <Box
        sx={CustomBtn}
        style={{
          borderRight: "1px solid #e4e4e4",
          cursor: disableDecButton ? "not-allowed" : "pointer",
        }}
        onClick={inputClickHandler(-1)}
      >
        -
      </Box>
      <TextField
        id="outlined-number"
        type="number"
        value={cartItem.quantity}
        sx={{
          width: { xs: "58px", sm: "40px", lg: "58px" },
          "& .MuiInputBase-root": {
            height: "100%",
            borderRadius: "0",
          },
          "& .MuiInputBase-input": {
            padding: 0,
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
        onClick={inputClickHandler(+1)}
        style={{
          borderLeft: "1px solid #e4e4e4",
          cursor: disableIncButton ? "not-allowed" : "pointer",
        }}
      >
        +
      </Box>
    </Box>
  );
};

export default QuantityInput;
