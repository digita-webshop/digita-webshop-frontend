import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

type props = {
  id: number;
  title: string;
};

const CardTitle = ({ id, title }: props) => {
  return (
    <Link
      component={RouterLink}
      to={`/blog/${id}`}
      sx={{
        '&:hover': { color: '#f03637', transition: 'all 500ms' },
      }}
      variant='body1'
      fontWeight={500}
      underline='none'
    >
      {title}
    </Link>
  );
};

export default CardTitle;
