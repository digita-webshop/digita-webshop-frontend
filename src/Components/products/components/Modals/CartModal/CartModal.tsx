import { Box, Typography, Button } from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

type T = {
    price: number;
}
/* ============= cart modal ================ */
const cartModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
  };

const CartModal = ({price}: T) => {
  return (
    <Box sx={cartModal}>
      <CheckCircleRoundedIcon
        sx={{ fontSize: 110, fontWeight: 100, color: "#f03637", p: 2 }}
      />
      <Typography id="modal-modal-title" variant="h5" component="h2">
        Item added to your cart
      </Typography>
      <Typography
        id="modal-modal-title"
        variant="body2"
        component="h2"
        sx={{ margin: "0.8rem 0", color: "#777" }}
      >
        1 ITEMS IN THE CART (${price}00)
      </Typography>
      <Box sx={{ display: "flex", gap: 3, margin: "0.5rem 0" }}>
        <Button
          variant="contained"
          sx={{ p: "0.8rem 2.2rem", background: "#f03637" }}
        >
          Continue Shopping
        </Button>
        <Button variant="contained" sx={{ p: "0.8rem 2.2rem" }}>
           Go To The Cart  
        </Button>
      </Box>
      <Typography
        sx={{
          display: "flex",
          gap: 1,
          color: "#777",
          p: "1rem 0 0.3rem 0",
        }}
      >
        Buy for <Box sx={{ color: "red" }}>$448.00</Box> more and get free
        shipping
      </Typography>
    </Box>
  );
};

export default CartModal;
