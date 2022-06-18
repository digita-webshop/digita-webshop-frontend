import IMAGES from '../../../../Assets/Images';
import { Grid, Typography } from '@mui/material';
import CustomSeparator from './CustomSeparator/CustomSeparator';

function Header() {
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

  return (
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
  );
}

export default Header;
