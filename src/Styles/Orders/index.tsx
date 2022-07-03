import { Box, TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TCell = styled(TableCell)(({ theme }) => ({
  fontSize: "15px",
  color: theme.palette.common.digitaBlack,
  [theme.breakpoints.between("sm", "lg")]: {
    padding: "12px 4px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "8px 4px",
  },
}));

export const TableButton = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  border: "1px solid",
  borderColor: theme.palette.common.panelBorderGrey,
  padding: "9px 10px",
  borderRadius: "3px",
  cursor: "pointer",
  "&:hover": {
    borderColor: theme.palette.common.panelGrey,
  },
}));

export const tableBadgeStyles = {
  textTransform: "capitalize",
  borderRadius: "15px",
  fontSize: { xs: "12px", md: "14px" },
  bgcolor: "common.panelActiveRed",
  padding: { xs: "2px 4px", sm: "4px 8px" },
  color: "common.digitaRed",
  fontWeight: 500,
};
