import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

type props = {
  id: string;
  description: string;
  userName: string;
};

const RecentComment = ({ id, userName, description }: props) => {
  return (
    <Typography variant="body2" color="text.secondary" pt={2}>
      {userName} on&nbsp;
      <Link
        component={RouterLink}
        to={`/shop`}
        underline="none"
        sx={{
          "&:hover": {
            color: "#f03637",
            transition: "all 500ms",
          },
        }}
      >
        {description}
      </Link>
    </Typography>
  );
};

export default RecentComment;
