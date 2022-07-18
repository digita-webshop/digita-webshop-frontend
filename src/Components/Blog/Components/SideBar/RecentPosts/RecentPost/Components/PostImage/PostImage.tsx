import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

type props = {
  id: number;
  title: string;
  image: string;
};

const PostImage = ({ id, title, image }: props) => {
  return (
    <Link
      component={RouterLink}
      to={`/article/${id}`}
      sx={{
        "&:hover": {
          filter: "brightness(70%)",
          transition: "all 500ms",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 80, height: 60 }}
        image={`${image}`}
        alt={`${title}`}
      />
    </Link>
  );
};

export default PostImage;
