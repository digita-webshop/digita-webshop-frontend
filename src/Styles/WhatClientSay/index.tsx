import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledTypography {
  fontWeight: string;
  smallSizeFontSize: string;
  mediumSizeFontSize: string;
  component: string;
  children: string;
}

export const ReusableTypography = styled((props: StyledTypography) => {
  const { smallSizeFontSize, mediumSizeFontSize, ...rest } = props;
  return <Typography {...rest} />;
})(({ theme, smallSizeFontSize, mediumSizeFontSize }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: smallSizeFontSize,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: mediumSizeFontSize,
  },
}));
