import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { RecentCommentsBlogPage } from '../../../../../Services/Utils/Data/data';
import RecentComment from './RecentComment/RecentComment';

function RecentComments() {
  return (
    <Box
      sx={{
        border: '1px solid #e9e9e9',
        px: '20px',
        pt: '20px',
        pb: '30px',
        mb: '30px',
        mr: '15px',
      }}
    >
      <Typography
        variant='subtitle2'
        sx={{
          pb: '20px',
        }}
      >
        RECENT COMMENTS
      </Typography>
      <Box sx={{ width: 40, borderBottom: '3px solid #f03637' }}></Box>
      <Divider />
      {RecentCommentsBlogPage.map((comment) => (
        <RecentComment title={comment.title} author={comment.author} />
      ))}
    </Box>
  );
}

export default RecentComments;
