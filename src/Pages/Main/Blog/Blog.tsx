import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from '@mui/material';
import IMAGES from '../../../Assets/Images';
import CustomSeparator from '../../../Components/CustomSeparator/CustomSeparator';
import Link from '@mui/material/Link';


const bgStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${IMAGES.bgImage})`,
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
          sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', sm: '2.2rem' } }}
          p={1}
        >
          Blog
        </Typography>
        <CustomSeparator name='Blog'></CustomSeparator>
      </Grid>
      <Grid container sx={{ py: 6.25, px: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <Link href='#'>
              <CardMedia
                component='img'
                image={`${IMAGES.blog6}`}
                alt='On Salvatore Ferragamo’s New Chapter'
              />
            </Link>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Blog;
