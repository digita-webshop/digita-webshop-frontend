import { Grid, Typography } from '@mui/material';
import bgImage from '../../../Assets/Images/bg-page-title.jpg';
import CustomSeparator from '../../../Components/CustomSeparator/CustomSeparator';

const bgStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: {
    xs: 'auto',
    sm: '200px',
  },
  padding: {
    xs: 5,
  },
};

function Blog() {
  return (
    <>
      <Grid container sx={bgStyles}>
        <Typography
          align='center'
          color='white'
          sx={{fontWeight: 600, fontSize: {xs: '1.2rem', sm: '2.2rem'}}}
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
