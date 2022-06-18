import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: 10,
}));

type props = {
  author: string;
  date: string;
  status: string;
};

const CardDescription = ({ author, date, status }: props) => {
  return (
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
            {author} -
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
          &nbsp;{date} -
        </Box>
      </Item>
      {/* Status article */}
      <Item>
        <Box display='flex'>
          &nbsp;
          <FolderOutlinedIcon style={{ fontSize: '13px' }} color='secondary' />
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
            &nbsp;{status}
          </Link>
        </Box>
      </Item>
    </Box>
  );
};

export default CardDescription;