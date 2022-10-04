import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

type props = {
  id: string;
  title: string;
  userName: string;
  articleId: string;
};

const RecentComment = ({ id, userName, title, articleId }: props) => {
  return (
    <Typography variant="body2" color="text.secondary" pt={2}>
      {userName} on&nbsp;
      <Link
        component={RouterLink}
        to={`/article/${articleId}`}
        underline="none"
        sx={{
          "&:hover": {
            color: "#f03637",
            transition: "all 500ms",
          },
        }}
      >
        {title}
      </Link>
    </Typography>
  );
};

export default RecentComment;
