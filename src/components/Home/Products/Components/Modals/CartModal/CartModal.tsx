import { Dispatch, SetStateAction } from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { cartModal } from "../../../styles";
import { useAppSelector } from "redux/store";
import { getSubtotal } from "utils/getSubtotal";
import { Link } from "react-router-dom";
import { ICartItem } from "types/cart";

type T = {
  cartItems: ICartItem[];
  setOpenCart: Dispatch<SetStateAction<boolean>>;
};

const CartModal = ({ cartItems, setOpenCart }: T) => {
  const { user } = useAppSelector((state) => state.reducer.auth);
  const { subtotal } = useAppSelector((state) => state.reducer.cart);

  let cartSubtotal = subtotal;
  if (user) {
    cartSubtotal = getSubtotal(cartItems);
  }
  return (
    <Box sx={cartModal}>
      <CheckCircleRoundedIcon sx={{ fontSize: 110, fontWeight: 100, color: "#f03637", padding: 2 }} />
      <Typography id="modal-modal-title" variant="h5" component="h2">
        Item added to your cart
      </Typography>
      <Typography id="modal-modal-title" variant="body2" component="h2" sx={{ margin: "0.8rem 0", color: "#777" }}>
        {`${cartItems.length} ${cartItems.length === 1 ? "ITEM" : "ITEMS"} IN THE CART ($${cartSubtotal})`}
      </Typography>
      <Box sx={{ display: "flex", gap: 3, margin: "0.5rem 0" }}>
        <Button
          variant="contained"
          sx={{
            padding: "0.8rem 2.2rem",
            background: "#f03637",
            "&:hover": { background: "#333" },
          }}
          onClick={() => setOpenCart(false)}
        >
          Continue Shopping
        </Button>
        <Button component={Link} to="/cart" variant="contained" sx={{ padding: "0.8rem 2.2rem" }}>
           Go To The Cart  
        </Button>
      </Box>
      <Typography
        sx={{
          display: "flex",
          gap: 1,
          color: "#777",
          padding: "1rem 0 0.3rem 0",
        }}
      >
        Buy for
        <Typography component={"span"} sx={{ color: "red" }}>
          $448.00
        </Typography>
        more and get free shipping
      </Typography>
    </Box>
  );
};
export default CartModal;
