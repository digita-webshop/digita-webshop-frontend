import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import CartItem from "../Types/CartItemType";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCart } from "../ShoppingCart";
import { RootState } from "../../../store";

export enum UpdateType {
  Remove = 1,
  Update,
}

type Props = {
  item?: CartItem;
  type?: UpdateType;
  setCartUpdated: React.Dispatch<React.SetStateAction<UpdateCart | null>>;
};

const CartUpdated = ({ item, type, setCartUpdated }: Props) => {
  const dispatch = useDispatch();

  const cartList = useSelector(
    (state: RootState) => state.reducer.cart.cartList
  );

  const handleUndo = () => {
    setCartUpdated(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 15px",
        margin: "0 0 30px",
        border: "1px solid #ddd",
      }}
    >
      <CheckIcon
        sx={{
          fontSize: "0.9rem",
          marginRight: "10px",
          color: "#ddd",
        }}
      />
      <Typography
        sx={{
          fontSize: "14px",
          color: "#777",
        }}
      >
        {type === UpdateType.Remove
          ? `${`“${item?.productId}“ removed.`}`
          : "Cart updated."}
      </Typography>
      {type === UpdateType.Remove && (
        <Box sx={{ marginLeft: "auto" }}>
          <DynamicButton
            action={handleUndo}
            title={"Undo?"}
            classes={{
              background: "#f03637",
              padding: "6px 18px",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default CartUpdated;
