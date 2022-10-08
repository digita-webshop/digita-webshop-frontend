import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashTitle = styled((props: any) => (
  <Typography variant="h2" {...props} />
))(({ theme }) => ({
  fontSize: "20px ",
  fontWeight: 500,
  textTransform: "capitalize",
}));

export const analyticsBtnStyles = {
  display: "inline-flex",
  border: "1px solid",
  borderColor: "common.panelHoverDarkGrey",
  borderRadius: "3px",
  padding: "8px 10px",
  gap: "8px",
  cursor: "pointer",
  transition: "all 150ms ease-in",
  "&:hover": {
    borderColor: "common.panelGrey",
  },
};
