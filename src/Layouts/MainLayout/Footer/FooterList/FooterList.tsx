import { Typography, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/features/store";

interface Props {
  title: string;
  links: { name: string; route: string }[];
}
function FooterList({ title, links }: Props) {
  const { role } = useAppSelector((state) => state.reducer.auth);
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
      {links?.map(({ name, route }) => {
        let to = route;
        if (
          (name === "addresses" || name === "account details") &&
          (role === "admin" || role === "superAdmin")
        ) {
          to = "/panel/settings";
        }
        if ((name === "addresses" || name === "account details") && !role) {
          to = "#";
        }
        return (
          <Box
            key={name}
            sx={{
              a: {
                display: "flex",
                alignItems: "center",
                textTransform: "capitalize",
                textDecoration: "none",
                color: "#C1C4C9CC",
                marginBottom: "6px",
                "&:hover": { color: "#f03637" },
              },
            }}
          >
            <Link to={to}>
              <ChevronRightIcon sx={{ fontSize: "20px" }} /> {name}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default FooterList;
