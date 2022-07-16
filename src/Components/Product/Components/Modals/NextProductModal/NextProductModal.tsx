import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import productOne from '../../../../../Assets/Images/Product/product-7.jpg';
import {
  Card ,

CardMedia ,
CardActionArea, 
}from '@mui/material';


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
          
          image={productOne}
           alt="green iguana"
        />
      </CardActionArea>
    </Card>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
  
    </div>
  );
}
