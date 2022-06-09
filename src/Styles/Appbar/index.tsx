import { styled } from "@mui/material/styles";
import { Tab, Tabs, Paper } from "@mui/material";
import { SyntheticEvent } from "react";

interface StyledTabProps {
  label: string;
  component: any;
  to: string;
  value: string;
  icon: any;
  iconPosition: any;
  onMouseEnter: (event: SyntheticEvent) => void;
}

export const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "capitalize",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  height: "90px",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: 15,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  borderBottom: "3px solid white",

  "&:hover": {
    color: "#f03637",
    borderBottom: "3px solid #f03637",
  },
  "&.Mui-selected": {
    color: "#333333",
  },
}));

export const AntTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#f03637",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));