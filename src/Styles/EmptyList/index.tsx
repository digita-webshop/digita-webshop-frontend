import { Box, styled } from "@mui/material";

export const EmptyWishlistWrapper = styled(Box)(({ theme }) => ({
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& .itemImg": {
    width: "100px",
  },
}));
