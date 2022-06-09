import { Grid, Typography } from '@mui/material';
import bgImage from '../../../Assets/Images/bg-page-title.jpg';
import CustomSeparator from '../../../Components/CustomSeparator/CustomSeparator';

function Blog() {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        height='200px'
        display='flex'
        flexDirection={'column'}
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          align='center'
          variant='h5'
          color='white'
          style={{ fontWeight: 600 }}
          p={1}
        >
          Blog
        </Typography>
        <CustomSeparator name='Blog'></CustomSeparator>
      </Grid>
    </>
  );
}

export default Blog;
