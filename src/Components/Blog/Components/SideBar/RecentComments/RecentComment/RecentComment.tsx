import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

type props = {
  title: string;
  author: string;
};

const RecentComment = ({ author, title }: props) => {
  return (
    <Typography variant='body2' color='text.secondary' pt={2}>
      {author} on&nbsp;
      <Link
        underline='none'
        href='#'
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
