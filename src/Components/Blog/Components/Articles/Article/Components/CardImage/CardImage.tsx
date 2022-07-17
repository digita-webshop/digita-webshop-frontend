import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

type props = {
  id: number;
  title: string;
  image: string;
};
const CardImage = ({ id, image, title }: props) => {
  return (
    <Link component={RouterLink} to={`/blog/${id}`}>
      <CardMedia component='img' image={`${image}`} alt={`${title}`} />
    </Link>
  );
};

export default CardImage;
