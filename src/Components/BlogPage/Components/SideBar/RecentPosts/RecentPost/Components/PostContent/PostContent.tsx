import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

type props = {
  title: string;
  date: string;
};

const PostContent = ({ title, date }: props) => {
  return (
    <Box>
      <CardContent
        sx={{
          px: 0,
        }}
      >
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
          <Typography variant='subtitle2'>{title}</Typography>
        </Link>
        <Typography variant='body2' color='text.secondary' mt={'6px'}>
          {date}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default PostContent;
