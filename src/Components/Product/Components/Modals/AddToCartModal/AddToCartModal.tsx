import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import {
     PopupInner,
     PopupContent,
    popupTitle,
    popupContent,
    popupText,
    buttonsWrap,
    continueBtn,
    cartBtn,
    popupWrap,
    space,

    
    
    } from "../../../../../Styles/Product/index";



export default function BasicModal() {


  return (
    <Box sx={popupWrap}>
    
  
      
       <Box sx={ PopupInner}>
       <Box sx={ PopupContent}>
     
 <Typography variant="h3" component="h3" sx={popupTitle}>
 <CheckCircleRoundedIcon  sx={{color:"#f03637",    fontSize: "120px",
    fontWeight: "600",}}/>
          </Typography>
       <Typography variant="h3" component="h3" sx={popupTitle}>
       Item added to your cart
          </Typography>
          <Typography variant="body2" component="p" sx={popupContent}>
          1 ITEMS IN THE CART <span className="price">($52.00)</span>
          </Typography>
          <Box sx={buttonsWrap}>
          <Button
            sx={continueBtn}
            variant="contained"
            color="error"
          >
          Continue Shopping
          </Button>
          <Box sx={space}>space</Box>
          <Button variant="contained" sx={cartBtn}>Go To The Cart</Button>
          </Box>
          <Typography variant="body2" component="p" sx={popupText}>
          Buy for <span className="price">$448.00</span>  more and get free shipping
          </Typography>
</Box>
       </Box>
        </Box>

   
  );
}
