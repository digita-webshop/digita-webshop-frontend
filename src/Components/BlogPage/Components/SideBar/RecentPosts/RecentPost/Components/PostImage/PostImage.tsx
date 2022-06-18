import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

type props = {
  title: string;
  image: string;
};

const PostImage = ({ image, title }: props) => {
  return (
    <Link
      href='#'
      sx={{
        '&:hover': {
          filter: 'brightness(70%)',
          transition: 'all 500ms',
        },
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 80, height: 60 }}
        image={`${image}`}
        alt={`${title}`}
      />
    </Link>
  );
};

export default PostImage;
