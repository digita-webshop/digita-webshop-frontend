import { Typography, Link, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface FooterListProps {
  title: string;
  links: string[];
}
function FooterList({ title, links }: FooterListProps) {
  return (
    <Box p="1rem">
      <Box>
        <Typography
          variant="h6"
          mb={2.5}
          color="white"
          textTransform={"uppercase"}
        >
          {title}
        </Typography>
      </Box>
      {links.map((link, index) => (
        <Box key={index}>
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              textTransform: "capitalize",
              "&:hover": { color: "#f03637" },
            }}
            href="#"
            underline="none"
            mb={1.5}
            color="#C1C4C9CC"
            variant="subtitle1"
          >
            <ChevronRightIcon sx={{ fontSize: "20px" }} /> {link}
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default FooterList;
