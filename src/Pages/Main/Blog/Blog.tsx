import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
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
      {/* // * header */}
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
      {/* // TODO: Should be optimized and separated into separate components */}
      {/* // * General Container for articles and Search parts, etc */}
      <Grid
        container
        sx={{ py: 6.25, px: '15px', maxWidth: '1200px', mx: 'auto', my: 0 }}
      >
        {/* // * articles */}

        <Grid item md={9}>
          <Grid container>
            <Grid item xs={12} sm={6} px={'15px'} mb={'35px'}>
              <Card>
                {/* card image */}
                <Link href='#'>
                  <CardMedia
                    component='img'
                    image={`${IMAGES.blog6}`}
                    alt='On Salvatore Ferragamo’s New Chapter'
                  />
                </Link>
                {/* card description */}
                <Box
                  display='flex'
                  flexDirection='row'
                  flexWrap='wrap'
                  alignItems='flex-end'
                >
                  {/* Author article */}
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
                  {/* Release date article */}
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
                  {/* Folder article */}
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
                {/* card title */}
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
                <Box
                  display='flex'
                  flexDirection='row'
                  flexWrap='wrap'
                  alignItems='flex-end'
                >
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
                <Box
                  display='flex'
                  flexDirection='row'
                  flexWrap='wrap'
                  alignItems='flex-end'
                >
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
                <Box
                  display='flex'
                  flexDirection='row'
                  flexWrap='wrap'
                  alignItems='flex-end'
                >
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
                <Box
                  display='flex'
                  flexDirection='row'
                  flexWrap='wrap'
                  alignItems='flex-end'
                >
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
                <Box
                  display='flex'
                  flexDirection='row'
                  flexWrap='wrap'
                  alignItems='flex-end'
                >
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

        {/* // * search parts, etc */}

        <Grid item xs={12} md={3}>
          {/* Search section */}
          <Box
            sx={{
              border: '1px solid #e9e9e9',
              px: '20px',
              pt: '20px',
              pb: '30px',
              mb: '30px',
            }}
          >
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
          {/* Recent posts section*/}
          <Box
            sx={{
              border: '1px solid #e9e9e9',
              px: '20px',
              pt: '20px',
              pb: '30px',
              mb: '30px',
            }}
          >
            <Typography
              variant='subtitle2'
              sx={{
                width: 40,
                pb: '20px',
                borderBottom: '3px solid #f03637',
              }}
            >
              RECENT&nbsp;POSTS
            </Typography>
            <Divider sx={{ mb: '14px' }} />
            {/* list articles */}

            <Card sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Link
                href='#'
                sx={{
                  '&:hover': {
                    filter: 'brightness(70%)',
                    transition: 'all 500ms',
                  },
                }}
              >
                <CardMedia
                  component='img'
                  sx={{ width: 80, height: 60 }}
                  image={`${IMAGES.blog6}`}
                  alt='On Salvatore Ferragamo’s New Chapter'
                />
              </Link>
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
                    <Typography variant='subtitle2'>
                      On Salvatore Ferragamo’s New Chapter
                    </Typography>
                  </Link>
                  <Typography variant='body2' color='text.secondary' mt={'6px'}>
                    July 9, 2019
                  </Typography>
                </CardContent>
              </Box>
            </Card>

            <Divider sx={{ mb: '14px' }} />

            <Card sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Link
                href='#'
                sx={{
                  '&:hover': {
                    filter: 'brightness(70%)',
                    transition: 'all 500ms',
                  },
                }}
              >
                <CardMedia
                  component='img'
                  sx={{ width: 80, height: 60 }}
                  image={`${IMAGES.blog5}`}
                  alt='Decoding #OOTD Pose in The Modeling Industry'
                />
              </Link>
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
                    <Typography variant='subtitle2'>
                      Decoding #OOTD Pose in The Modeling Industry
                    </Typography>
                  </Link>
                  <Typography variant='body2' color='text.secondary' mt={'6px'}>
                    October 5, 2018
                  </Typography>
                </CardContent>
              </Box>
            </Card>

            <Divider sx={{ mb: '14px' }} />

            <Card sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Link
                href='#'
                sx={{
                  '&:hover': {
                    filter: 'brightness(70%)',
                    transition: 'all 500ms',
                  },
                }}
              >
                <CardMedia
                  component='img'
                  sx={{ width: 80, height: 60 }}
                  image={`${IMAGES.blog4}`}
                  alt='8 Fashion Photographers in UK'
                />
              </Link>
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
                    <Typography variant='subtitle2'>
                      8 Fashion Photographers in UK
                    </Typography>
                  </Link>
                  <Typography variant='body2' color='text.secondary' mt={'6px'}>
                    June 10, 2018
                  </Typography>
                </CardContent>
              </Box>
            </Card>

            <Divider sx={{ mb: '14px' }} />

            <Card sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Link
                href='#'
                sx={{
                  '&:hover': {
                    filter: 'brightness(70%)',
                    transition: 'all 500ms',
                  },
                }}
              >
                <CardMedia
                  component='img'
                  sx={{ width: 80, height: 60 }}
                  image={`${IMAGES.blog3}`}
                  alt='Sample post with format chat'
                />
              </Link>
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
                    <Typography variant='subtitle2'>
                      Sample post with format chat
                    </Typography>
                  </Link>
                  <Typography variant='body2' color='text.secondary' mt={'6px'}>
                    June 8, 2018
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>

          {/* Recent comments section */}
        </Grid>
      </Grid>
    </>
  );
}

export default Blog;
