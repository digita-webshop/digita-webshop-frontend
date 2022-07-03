import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashWrapper = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: "white",
  boxShadow: "0 0.1rem 0.25rem rgb(0 0 0 / 8%)",
  borderRadius: "4px",
}));
