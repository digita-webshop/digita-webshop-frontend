




import{Grid ,TextField,Button ,Divider, Box ,Link ,Rating ,Typography,Container, CardActionArea, CardActions}  from '@mui/material';
import ProductSlider from "../ProductSlider/ProductSlider";
import AddToCartModal from "../Modals/AddToCartModal/AddToCartModal";
import NextProductModal from "../Modals/NextProductModal/NextProductModal";

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
  productMetaStyle,
  WishlistButton,
  CompareButton,
  linkStyle,
  filledPrice,
  nextButton,
  nextButtonStyle,
  TitleSectionStyle

  
  
  } from "../../../../Styles/Product/index";


const ProductDetails = () => {
 
  
 return(
  <>
  <Container maxWidth="lg"  sx={contentWrap}>
        
  <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
  <Box>
  <ProductSlider/>
  </Box>
        
      
          
  </Grid>
  <Grid item xs={12} md={6}>
  <Box sx={PostStyle}>
      <Box sx={TitleSectionStyle}>
      <Typography variant="h4" sx={productTitle} component="div">
      Microsoft Xbox One S Blue Grey
      </Typography>
      <Box sx={nextButton}>
      <Button variant="outlined" sx={nextButtonStyle}><ArrowBackIosIcon/></Button>
      
      <Button variant="outlined" sx={nextButtonStyle}><ArrowForwardIosIcon/></Button>
        </Box>
      <Rating name="size-small" defaultValue={5} size="small" sx={starRating}/>
      <Link href="#" underline="none"   className="customerReview"   sx={linkStyle}>
      (1 customer review)
</Link>
</Box>
<TextField
          id="filled-read-only-input"
          sx={filledPrice}
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

      <Box sx={PostStyle}>
    
      <Link
      sx={WishlistButton}
  component="button"
  variant="body2"
  underline="none"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
<FavoriteBorderIcon/>   Wishlist
</Link>
      {/* <Button variant="contained" startIcon={<ShuffleIcon />} sx={CompareButton}>
      Compare
      </Button> */}
      <Link
      sx={CompareButton}
  component="button"
  variant="body2"
  underline="none"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
<ShuffleIcon />  Compare
</Link>
 </Box>

    </Box>
    <Divider sx={{padding:"20px",width:"100%",}} />
    <Box sx={productMetaStyle}>
    <Typography variant="body2" component="p" sx={{lineHeight: "1.2",}}>
    SKU: WVN-13

    <Link href="#" underline="none" color="inherit" variant="body2"    sx={linkStyle}>
  {'  WVN-13'}
</Link>
      </Typography>
      <Typography variant="body2" component="p" >
      Categories: 

      <Link href="#" underline="none" color="inherit" variant="body2"    sx={linkStyle}>
  {' Audio &amp; Video Game'}
</Link>,
<Link href="#" underline="none"    sx={linkStyle}>
  {'  Headphone'}
</Link>,
<Link href="#" underline="none"   sx={linkStyle}>
  {'Phone Accessories'}
</Link>,
<Link href="#" underline="none"    sx={linkStyle}>
  {' Smart TV'}
</Link> ,
<Link href="#" underline="none"    sx={linkStyle}>
  {'Technologies'}
</Link>,<Link href="#" underline="none"    sx={linkStyle}>
  {'Virtual Reality Glasses'}
</Link><Link href="#" underline="none"   sx={linkStyle}>
  {'Xbox(Console)'}
</Link>
    

      </Typography>
      <Typography variant="body2" component="p"  sx={{lineHeight: "1.2",}}>
      Tags:
      <Link href="#" underline="none" sx={linkStyle}>
  {' Tag-02'}
</Link>,
<Link href="#" underline="none" sx={linkStyle}>
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

