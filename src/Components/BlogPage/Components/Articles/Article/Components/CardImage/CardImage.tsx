import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

type props = {
  title: string;
  image: string;
}

const  CardImage = ({image, title}: props) => {
  return (
    <Link href='#'>
      <CardMedia
        component='img'
        image={`${image}`}
        alt={`${title}`}
      />
    </Link>
  );
}
export default CardImage;
