import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';

type props = {
  name: string;
};

const BreadCrumbs = ({ name }: props) => {
  const breadcrumbs = [
    <Link
      component={RouterLink}
      to='/'
      sx={{ '&:hover': { color: '#f03637', transition: 'all 500ms' } }}
      variant='body2'
      underline='none'
      color='#fff'
    >
      Home
    </Link>,
    <Typography variant='subtitle2' color='#fff'>
      {name}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' htmlColor='white' />}
        aria-label='breadcrumb'
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbs;
