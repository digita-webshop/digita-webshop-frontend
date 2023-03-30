import { useRef, Dispatch, SetStateAction } from "react";
import { Box, Button, FormControl, FormLabel } from "@mui/material";
import { CheckoutInput } from "../styles";

interface Props {
  setCouponValue: Dispatch<SetStateAction<string>>;
}

function Coupon({ setCouponValue }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const applyCouponHandler = () => {
    const value = inputRef?.current?.value;

    if (value?.trim().length !== 0) {
      setCouponValue(value!);
    }
  };
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
        <CheckoutInput placeholder="" sx={{ width: "65%" }} ref={inputRef} />
        <Button
          variant="contained"
          sx={{
            height: "100%",
            textTransform: "uppercase",
            width: "32%",
            borderRadius: "3px",
            fontSize: { xs: "10px", lg: "14px" },
          }}
          onClick={applyCouponHandler}
        >
          Apply Coupon
        </Button>
      </Box>
    </FormControl>
  );
}

export default Coupon;
