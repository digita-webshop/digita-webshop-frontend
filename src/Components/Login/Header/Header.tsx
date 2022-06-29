import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: Props) {
  return (
    <Box sx={{ textAlign: "center", marginY: "25px" }}>
      <Typography component={"h2"} textTransform={"capitalize"}>
        {title}
      </Typography>
      <Typography component={"h6"}>{subtitle}</Typography>
    </Box>
  );
}

export default Header;
