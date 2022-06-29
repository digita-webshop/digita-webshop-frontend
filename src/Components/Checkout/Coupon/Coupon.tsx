import { Box, Button, FormControl, FormLabel } from "@mui/material";
import { CheckoutInput } from "../../../Styles/Checkout";

function Coupon() {
  return (
    <FormControl fullWidth>
      <FormLabel
        color="primary"
        sx={{
          fontSize: "14px",
          color: "common.digitaGrey",
          display: "flex",
        }}
      >
        Coupon Code
      </FormLabel>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "40px",
        }}
      >
        <CheckoutInput placeholder="" sx={{ width: "65%" }} />
        <Button
          variant="contained"
          sx={{
            height: "100%",
            textTransform: "uppercase",
            width: "32%",
            borderRadius: "3px",
          }}
        >
          Apply Coupon
        </Button>
      </Box>
    </FormControl>
  );
}

export default Coupon;
