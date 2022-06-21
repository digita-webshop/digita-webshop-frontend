import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { RecentCommentsBlogPage } from '../../../../../Services/Utils/Data/data';
import RecentComment from './RecentComment/RecentComment';
import { FilterTitleWrapper } from '../../../../../Styles/ShopPage';

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
      <FilterTitleWrapper className='underline'>
        <Typography
          component={'h4'}
          variant='body1'
          color='primary'
          fontWeight={600}
        >
          RECENT COMMENTS
        </Typography>
      </FilterTitleWrapper>
      {RecentCommentsBlogPage.map((comment) => (
        <RecentComment title={comment.title} author={comment.author} />
      ))}
    </Box>
  );
}

export default RecentComments;
