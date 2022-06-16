import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from '@mui/material';
import IMAGES from '../../../Assets/Images';
import CustomSeparator from '../../../Components/CustomSeparator/CustomSeparator';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import Box from '@mui/material/Box';

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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: 10,
}));

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
            <Box display='flex' flexDirection='row' alignItems='flex-end'>
              <Item>
                <Box display='flex' alignItems='flex-end'>
                  <PersonOutlineOutlinedIcon
                    style={{ fontSize: '1rem' }}
                    color='secondary'
                  />
                  <Link
                    underline='none'
                    href='#'
                    color='secondary'
                    sx={{
                      '&:hover': { color: '#f03637', transition: 'all 500ms' },
                    }}
                  >
                    Peter Giroud -
                  </Link>
                </Box>
              </Item>
              <Item>
                <Box display='flex'>
                  &nbsp;
                  <AccessTimeOutlinedIcon
                    style={{ fontSize: '13px' }}
                    color='secondary'
                  />
                  &nbsp;July 9, 2019 -
                </Box>
              </Item>
              <Item>
                <Box display='flex'>
                  &nbsp;
                  <FolderOutlinedIcon
                    style={{ fontSize: '13px' }}
                    color='secondary'
                  />
                  <Link
                    underline='none'
                    href='#'
                    color='secondary'
                    sx={{
                      '&:hover': { color: '#f03637', transition: 'all 500ms' },
                    }}
                  >
                    &nbsp;Browse Our Sales
                  </Link>
                </Box>
              </Item>
            </Box>
            <Link
              sx={{
                '&:hover': { color: '#f03637', transition: 'all 500ms' },
              }}
              variant='body2'
              fontWeight={500}
              underline='none'
              key='1'
              href='#'
            >
              On Salvatore Ferragamo’s New Chapter
            </Link>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Blog;
