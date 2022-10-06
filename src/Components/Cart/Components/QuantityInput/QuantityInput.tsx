import { Box } from "@mui/material";
import { CustomBtn } from "../../styles";
import { ICartItem } from "../../../../Services/Types/cart";
import { useDispatch } from "react-redux";
import { updateCart } from "@/features/cart/cartSlice";

type Props = {
  cartItem: ICartItem;
};

const QuantityInput = ({ cartItem }: Props) => {
  const dispatch = useDispatch();

  const isMax = cartItem.quantity >= cartItem.productId.quantity;

  const inputClickHandler = (value: number) => () => {
    if (cartItem.quantity <= 1 && value === -1) return;

    if (isMax && value === +1) return;

    let updatedCartItem = { ...cartItem };
    updatedCartItem.quantity += value;

    dispatch(updateCart(updatedCartItem));
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
          cursor: cartItem.quantity === 1 ? "not-allowed" : "pointer",
        }}
        onClick={inputClickHandler(-1)}
      >
        -
      </Box>
      <Box
        id="outlined-number"
        sx={{
          width: { xs: "58px", sm: "40px", lg: "58px" },
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {isMax && (
          <Box
            sx={{
              bgcolor: "common.digitaRed",
              color: "#fff",
              position: "absolute",
              top: "-8px",
              width: "100%",
              textAlign: "center",
            }}
          >
            max
          </Box>
        )}
        {cartItem.quantity}
      </Box>
      <Box
        sx={CustomBtn}
        onClick={inputClickHandler(+1)}
        style={{
          borderLeft: "1px solid #e4e4e4",
          cursor: isMax ? "not-allowed" : "pointer",
        }}
      >
        +
      </Box>
    </Box>
  );
};

export default QuantityInput;
