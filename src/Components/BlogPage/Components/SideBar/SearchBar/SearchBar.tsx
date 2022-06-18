import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';

const SearchBar = () => {
  return (
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
          pb: '20px',
        }}
      >
        SEARCH
      </Typography>
      <Box sx={{ width: 40, borderBottom: '3px solid #f03637' }}></Box>
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
  );
};

export default SearchBar;
