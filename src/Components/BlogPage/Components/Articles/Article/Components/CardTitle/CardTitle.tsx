import Link from '@mui/material/Link';

type props = {
  title: string;
};

const CardTitle = ({ title }: props) => {
  return (
    <Link
      sx={{
        '&:hover': { color: '#f03637', transition: 'all 500ms' },
      }}
      variant='body1'
      fontWeight={500}
      underline='none'
      href='#'
    >
      {title}
    </Link>
  );
};

export default CardTitle;
