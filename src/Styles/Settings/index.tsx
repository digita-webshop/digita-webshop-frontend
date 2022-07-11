import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const POutlinedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "5px",
  fontSize: "16px",
  height: "42px",
  color: theme.palette.common.digitaDarkRed,
  border: `1px solid ${theme.palette.common.digitaDarkRed}`,
  "&:hover": {
    backgroundColor: theme.palette.common.digitaDarkRed,
    color: theme.palette.common.white,
  },
}));
