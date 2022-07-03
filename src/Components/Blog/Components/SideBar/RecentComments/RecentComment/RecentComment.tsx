import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

type props = {
  id: number;
  title: string;
  author: string;
};

const RecentComment = ({ id, author, title }: props) => {
  return (
    <Typography variant='body2' color='text.secondary' pt={2}>
      {author} on&nbsp;
      <Link
        component={RouterLink}
        to={`/shop`}
        underline='none'
        sx={{
          '&:hover': {
            color: '#f03637',
            transition: 'all 500ms',
          },
        }}
      >
        {title}
      </Link>
    </Typography>
  );
};

export default RecentComment;
