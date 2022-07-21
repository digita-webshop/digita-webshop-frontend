import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import productImage from '../../../../../Assets/Images/Product/product-8-100x100.jpg';
import {
  Card ,

CardMedia ,
CardActionArea, 
}from '@mui/material';

import {
  NextProductModalText

  
  
  } from "../../../../../Styles/Product/index";
export default function BasicModal() {


  return (
    <div>
    
        <Box >
        <Card sx={{border:" 1px solid #ebebeb" , margin:"0 0.5rem " ,}}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="96"
          width="96"
          
          image={productImage}
           alt="green iguana"
        />
      </CardActionArea>
    </Card>
          <Typography id="modal-modal-description"  sx={NextProductModalText}>
          SIRUM 360 Mobile Holder Trip
          </Typography>
        </Box>
  
    </div>
  );
}
