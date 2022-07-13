


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
  starRating,
  PostStyle,
  productMetaStyle

  
  
  } from "../../../../Styles/Product/index";


const ProductDetails = () => {
 return(
  <>
  <Container maxWidth="lg"  sx={contentWrap}>
        
  <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
  

      
          
  </Grid>
  <Grid item xs={12} md={6}>
  <Box sx={PostStyle}>
      
      <Typography variant="h4" sx={productTitle} component="div">
      Microsoft Xbox One S Blue Grey
      </Typography>
      <Button variant="outlined"><ArrowBackIosIcon/></Button>
      <Button variant="outlined"><ArrowForwardIosIcon/></Button>
      <Rating name="size-small" defaultValue={5} size="small" sx={starRating}/>
      <Link href="#" underline="none"     className="linkStyle">
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
      
      <Typography variant="body2" sx={ProductDetailsStyle} component="p">
     <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
     <p className="paragraph">Consetetur sadipscing elitr, sed diam nonumy eirmod</p> 
<p className="paragraph">Suspendisse ultrices mauris diam</p>

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
    <Divider sx={{padding:"20px",width:"100%",}} />
    <Box sx={productMetaStyle}>
    <Typography variant="body2" component="p" >
    SKU: WVN-13
      </Typography>
      <Typography variant="body2" component="p" >
      Categories: 

      <Link href="#" underline="none" color="inherit" variant="body2"   className="linkStyle">
  {' Audio &amp; Video Game'}
</Link>,
<Link href="#" underline="none"   className="linkStyle">
  {'  Headphone'}
</Link>,
<Link href="#" underline="none"  className="linkStyle">
  {'Phone Accessories'}
</Link>,
<Link href="#" underline="none"   className="linkStyle">
  {' Smart TV'}
</Link> ,
<Link href="#" underline="none"   className="linkStyle">
  {'Technologies'}
</Link>,<Link href="#" underline="none"   className="linkStyle">
  {'Virtual Reality Glasses'}
</Link><Link href="#" underline="none"  className="linkStyle">
  {'Xbox(Console)'}
</Link>
    

      </Typography>
      <Typography variant="body2" component="p" >
      Tags:
      <Link href="#" underline="none">
  {' Tag-02'}
</Link>,
<Link href="#" underline="none">
  {'  Tag-08'}
</Link>
      </Typography>
    </Box>

  
  </Grid>
  
</Grid>
      </Container>
      </>
 )
};

export default ProductDetails;
