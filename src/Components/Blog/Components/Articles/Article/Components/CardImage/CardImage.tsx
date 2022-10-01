import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

type props = {
  id: string;
  title: string;
  image: string;
};
const CardImage = ({ id, image, title }: props) => {
  return (
    <Link component={RouterLink} to={`/article/${id}`}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ aspectRatio: "1.2", objectFit: "fill" }}
      />
    </Link>
  );
};

export default CardImage;
