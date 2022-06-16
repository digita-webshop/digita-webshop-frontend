import { Typography, Link, Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface FooterListProps {
  title: string;
  links: string[];
}
function FooterList({ title, links }: FooterListProps) {
  return (
    <Grid
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      p="1rem"
    >
      <Typography
        variant="h6"
        mb={2.5}
        color="white"
        textTransform={"uppercase"}
      >
        {title}
      </Typography>
      {links.map((link, index) => (
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "capitalize",
            "&:hover": { color: "#f03637" },
          }}
          key={index}
          href="#"
          underline="none"
          mb={1.5}
          color="#C1C4C9CC"
          variant="subtitle1"
        >
          <ChevronRightIcon sx={{ fontSize: "20px" }} /> {link}
        </Link>
      ))}
    </Grid>
  );
}

export default FooterList;
