import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import {
  Card ,

CardMedia ,
CardActionArea, 
}from '@mui/material';

function ProductCart({item}: any) {

    return (
      <>
      <Card sx={{border:" 1px solid #ebebeb" , margin:"0 0.5rem " , '&:hover': {
     borderColor:"#F03637"
       } ,}}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="96"
          width="96"
          
          image={item.img}
           alt="product image"
        />
      </CardActionArea>
    </Card>
      </>
    );
}

export default ProductCart;
