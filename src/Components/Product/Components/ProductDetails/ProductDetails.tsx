


import{Grid ,TextField,Button ,Divider, Box ,Link ,Rating ,Typography,Container, CardActionArea, CardActions}  from '@mui/material';



import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import {
  ProductDetailsStyle,
  productTitle,
  contentWrap,
  addToCartButton,
  starRating
  
  
  } from "../../../../Styles/Product/index";


const ProductDetails = () => {
 return(
  <>
  <Container maxWidth="lg"  sx={contentWrap}>
        
  <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
  

      
          
  </Grid>
  <Grid item xs={12} md={6}>
  <Box sx={{ width: '100%', maxWidth: 500 }}>
      
      <Typography variant="h4" sx={productTitle} component="div">
      Microsoft Xbox One S Blue Grey
      </Typography>
      <Button variant="outlined"><ArrowBackIosIcon/></Button>
      <Button variant="outlined"><ArrowForwardIosIcon/></Button>
      <Rating name="size-small" defaultValue={5} size="small" sx={starRating}/>
      <Link href="#" underline="hover">
      (1 customer review)
</Link>
<TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="$52.00"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      <Typography variant="body2" sx={ProductDetailsStyle} component="div">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
Consetetur sadipscing elitr, sed diam nonumy eirmod
Suspendisse ultrices mauris diam
      </Typography>
      <Typography variant="body2" sx={ProductDetailsStyle} component="p" >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </Typography>
      <Button variant="contained" sx={addToCartButton}>Add To Cart</Button>
      {/* <Button variant="contained">View Cart</Button> */}

      <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<FavoriteBorderIcon/>}>
    
Wishlist

      </Button>
      <Button variant="contained" endIcon={<ShuffleIcon />}>
      Compare
      </Button>
    </Stack>

    </Box>
    <Divider />
    <Box sx={{ width: '100%', maxWidth: 500 }}>
    <Typography variant="body2" component="p" sx={{color: "#333", fontWeight: "600"}}>
    SKU: WVN-13
      </Typography>
      <Typography variant="body2" component="p" sx={ProductDetailsStyle}>
      Categories: Audio &amp; Video Game, Headphone, Phone Accessories, Smart TV, Technologies, Virtual Reality Glasses, Xbox(Console)
Tags: Tag-02, Tag-08
      </Typography>
    
    </Box>

  <div>Product Details</div>
  </Grid>
  
</Grid>
      </Container>
      </>
 )
};

export default ProductDetails;
