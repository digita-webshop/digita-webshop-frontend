import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

type props = {
  id: string;
  title: string;
};

const CardTitle = ({ id, title }: props) => {
  return (
    <Link
      component={RouterLink}
      to={`/article/${id}`}
      sx={{
        fontSize: { xs: "16px", sm: "20px" },
        "&:hover": { color: "#f03637", transition: "all 500ms" },
      }}
      variant="body1"
      fontWeight={500}
      underline="none"
    >
      {title}
    </Link>
  );
};

export default CardTitle;
