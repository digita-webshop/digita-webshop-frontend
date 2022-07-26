import { Box, Typography } from "@mui/material";
import { wrapper } from "../../../Styles/User";

const Orders = () => {
  return (
    <Box sx={wrapper}>
      <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
        My Orders
      </Typography>
    </Box>
  );
};

export default Orders;
