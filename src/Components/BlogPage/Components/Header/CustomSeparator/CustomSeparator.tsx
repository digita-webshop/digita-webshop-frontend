import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Type of props:
interface pageName {
  name: string;
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  //   TODO: link to home page
}

function CustomSeparator(props: pageName) {
  const breadcrumbs = [
    <Link
      sx={{ '&:hover': { color: '#f03637', transition: 'all 500ms' } }}
      variant='body2'
      underline='none'
      key='1'
      color='#fff'
      href='/'
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography variant="subtitle2" key='2' color='#fff'>
      {props.name}
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
}

export default CustomSeparator;
