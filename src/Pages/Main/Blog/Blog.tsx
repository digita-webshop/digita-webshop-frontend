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
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
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
      <Grid
        container
        sx={{ py: 6.25, px: '15px', maxWidth: '1200px', mx: 'auto', my: 0 }}
      >
        <Grid item md={9}>
          <Grid container>
            <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                  variant='body1'
                  fontWeight={500}
                  underline='none'
                  key='1'
                  href='#'
                >
                  On Salvatore Ferragamo’s New Chapter
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
              <Card>
                <Link href='#'>
                  <CardMedia
                    component='img'
                    image={`${IMAGES.blog5}`}
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                      &nbsp;October 5, 2018 -
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
                        }}
                      >
                        &nbsp;Men
                      </Link>
                    </Box>
                  </Item>
                </Box>
                <Link
                  sx={{
                    '&:hover': { color: '#f03637', transition: 'all 500ms' },
                  }}
                  variant='body1'
                  fontWeight={500}
                  underline='none'
                  key='1'
                  href='#'
                >
                  Decoding #OOTD Pose in The Modeling Industry
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
              <Card>
                <Link href='#'>
                  <CardMedia
                    component='img'
                    image={`${IMAGES.blog4}`}
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                      &nbsp;June 10, 2018 -
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
                        }}
                      >
                        &nbsp;On Sale
                      </Link>
                    </Box>
                  </Item>
                </Box>
                <Link
                  sx={{
                    '&:hover': { color: '#f03637', transition: 'all 500ms' },
                  }}
                  variant='body1'
                  fontWeight={500}
                  underline='none'
                  key='1'
                  href='#'
                >
                  Decoding #OOTD Pose in The Modeling Industry
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
              <Card>
                <Link href='#'>
                  <CardMedia
                    component='img'
                    image={`${IMAGES.blog3}`}
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                      &nbsp;June 8, 2018 -
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
                        }}
                      >
                        &nbsp;Women
                      </Link>
                    </Box>
                  </Item>
                </Box>
                <Link
                  sx={{
                    '&:hover': { color: '#f03637', transition: 'all 500ms' },
                  }}
                  variant='body1'
                  fontWeight={500}
                  underline='none'
                  key='1'
                  href='#'
                >
                  Sample Post With Format Chat
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
              <Card>
                <Link href='#'>
                  <CardMedia
                    component='img'
                    image={`${IMAGES.blog2}`}
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                      &nbsp;April 5, 2018 -
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                  variant='body1'
                  fontWeight={500}
                  underline='none'
                  key='1'
                  href='#'
                >
                  Sample Post With Format Audio
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
              <Card>
                <Link href='#'>
                  <CardMedia
                    component='img'
                    image={`${IMAGES.blog1}`}
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
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
                      &nbsp;February 8, 2018 -
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
                          '&:hover': {
                            color: '#f03637',
                            transition: 'all 500ms',
                          },
                        }}
                      >
                        &nbsp;Newest Items
                      </Link>
                    </Box>
                  </Item>
                </Box>
                <Link
                  sx={{
                    '&:hover': { color: '#f03637', transition: 'all 500ms' },
                  }}
                  variant='body1'
                  fontWeight={500}
                  underline='none'
                  key='1'
                  href='#'
                >
                  Sample Post With Format Image
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ border: '1px solid #e9e9e9', p: '20px' }}>
            <Typography
              variant='subtitle2'
              sx={{
                width: 40,
                pb: '20px',
                borderBottom: '3px solid #f03637',
              }}
            >
              SEARCH
            </Typography>
            <Divider sx={{ mb: '14px' }} />
            <InputBase
              sx={{
                backgroundColor: '#e9e9e9',
                borderRadius: '4px',
                py: '6px',
                px: '12px',
                fontSize: '14px',
                width: '100%',
              }}
              placeholder='Search'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Blog;
