import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.digitaRed,
  borderRadius: "5px",
  fontSize: "16px",
  height: "42px",
  "&:hover": { backgroundColor: theme.palette.common.digitaDarkRed },
}));
export const PTitle = styled("h1")(({ theme }) => ({
  fontFamily: "jost",
  fontSize: "32px",
  fontWeight: 500,
  textTransform: "capitalize",
  margin: 0,
}));
