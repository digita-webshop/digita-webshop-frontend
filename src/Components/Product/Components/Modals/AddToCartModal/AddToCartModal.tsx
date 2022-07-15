import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import {
    wooPopupInner,
    wooPopupContent,
    popupTitle,
    popupContent,
    popupText,
    buttonsWrap,
    continueBtn,
    cartBtn

    
    
    } from "../../../../../Styles/Product/index";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    
   
        <Box >
       <Box sx={wooPopupInner}>
       <Box sx={wooPopupContent}>
       <Typography variant="h3" component="h3" sx={popupTitle}>
       Item added to your cart
          </Typography>
          <Typography variant="body2" component="p" sx={popupContent}>
          1 ITEMS IN THE CART ($52.00)
          </Typography>
          <Box sx={buttonsWrap}>
          <Button
            sx={continueBtn}
            variant="contained"
            color="error"
          >
          Continue Shopping
          </Button>
          <Button variant="contained" sx={cartBtn}>Go To The Cart</Button>
          </Box>
          <Typography variant="body2" component="p" sx={popupText}>
          Buy for $448.00 more and get free shipping
          </Typography>
</Box>
       </Box>
        </Box>

    </div>
  );
}
