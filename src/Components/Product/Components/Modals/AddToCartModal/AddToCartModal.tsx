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
    cartBtn,
    popupWrap

    
    
    } from "../../../../../Styles/Product/index";



export default function BasicModal() {


  return (
    <Box sx={popupWrap}>
    
   
        <Box sx={{width:"40%",height:"400px"}}>
       <Box sx={wooPopupInner}>
       <Box sx={wooPopupContent}>
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
          <Box sx={{width:"10px", height: "50px",display:{xs:"none",sm:"inline-bloak",lg:"inline-block"}}}></Box>
          <Button variant="contained" sx={cartBtn}>Go To The Cart</Button>
          </Box>
          <Typography variant="body2" component="p" sx={popupText}>
          Buy for <span className="price">$448.00</span>  more and get free shipping
          </Typography>
</Box>
       </Box>
        </Box>

    </Box>
  );
}
