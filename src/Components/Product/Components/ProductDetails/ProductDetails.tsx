

import Modal from "@mui/material/Modal";
import { useState } from "react";

import{Grid ,Button ,Divider, Box ,Link ,Rating ,Typography,Container, CardActionArea, CardActions}  from '@mui/material';
// import ProductSlider from "../ProductSlider/ProductSlider";
import AddToCartModal from "../Modals/AddToCartModal/AddToCartModal";
import NextProductModal from "../Modals/NextProductModal/NextProductModal";
import PreviousProductModal from "../Modals/PreviousProductModal/PreviousProductModal";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import {
  CartButtonsStyle,
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
  TitleSectionStyle,
  ViewCartButton,
  starLink,
  ComperWishStyle

  
  
  } from "../../../../Styles/Product/index";


const ProductDetails = () => {
  const [openAddToCart, setOpenAddToCart] = useState(false);
  const [opennext, setOpennext] = useState(false);
  const handleCloseAddToCart = () => setOpenAddToCart(false);
  
 return(
  <>
  <Container maxWidth="lg"  sx={contentWrap}>
        
  <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
  <Box>
  {/* <ProductSlider/> */}
  </Box>
        
      
          
  </Grid>
  <Grid item xs={12} md={6}>
  <Box sx={PostStyle}>
      <Box sx={TitleSectionStyle}>
      <Typography variant="h4" sx={productTitle} component="div">
      Microsoft Xbox One S Blue Grey
      </Typography>
      <Box sx={nextButton}>
        {/* <Button variant="outlined" className="left"sx={nextButtonStyle}>		&lt;</Button> */}
           
    <Link
   className="left"sx={nextButtonStyle}
component="button"
variant="body2"
underline="none"
onClick={() => {
  console.info("I'm a button.");
}}
>
&lt;
</Link>
      {/* <Button variant="outlined" className="right" sx={nextButtonStyle}>	&gt; </Button> */}
         
    <Link
   className="right" sx={nextButtonStyle}
component="button"
variant="body2"
underline="none"
onClick={() => {
  console.info("I'm a button.");
}}
>
&gt;
</Link>
      
      
        </Box>
     
   <Typography variant="body2"  component="p">
   <Box sx={starLink}>
   <Rating name="read-only" defaultValue={5} size="small" readOnly sx={starRating}/>
      <Link href="#" underline="none"   className="customerReview"   sx={{marginBottom:"20px",marginTop:"-5px",}}>
      (1 customer review)
</Link>
   </Box>

      </Typography>
      
  
</Box>
<Box sx={ { height:"50px",width:"100%"}}></Box>
<Box sx={ filledPrice}><bdi>$52.00</bdi></Box>
      
      <Typography variant="body2" sx={ProductDetailsStyle} component="p">
     <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
     <p className="paragraph">Consetetur sadipscing elitr, sed diam nonumy eirmod</p> 
<p className="paragraph">Suspendisse ultrices mauris diam</p>

      </Typography>
      
      <Typography variant="body2" sx={ProductDetailsStyle} component="p" >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </Typography>
      <Box sx={CartButtonsStyle}>

      <Button variant="contained"    onClick={() => setOpenAddToCart(true)}sx={addToCartButton}>Add To Cart</Button>
      <Modal
        open={openAddToCart}
        onClose={handleCloseAddToCart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <AddToCartModal  />
      </Modal>
      <Button variant="contained" className="ShowViewCart" sx={ViewCartButton}>View Cart</Button>
      </Box>
      {/* <Button variant="contained">View Cart</Button> */}
  
    <Box sx={ComperWishStyle}>
    
    
    <Link
    sx={WishlistButton}
component="button"
variant="body2"
underline="none"
onClick={() => {
  console.info("I'm a button.");
}}
>
<FavoriteBorderIcon/>&nbsp;   Wishlist
</Link>
 
    <Link
    sx={CompareButton}
component="button"
variant="body2"
underline="none"
onClick={() => {
  console.info("I'm a button.");
}}
>
<ShuffleIcon />&nbsp;   Compare
</Link>
</Box>
    

    </Box>
    <Divider sx={{padding:"20px",width:"100%",}} />
    <Box sx={productMetaStyle}>
    <Typography variant="body2" component="p" sx={{lineHeight: "1.2",}}>
    SKU : WVN-13

   
      </Typography>
      <Typography variant="body2" component="p" >
      Categories :  

      <Link href="#" underline="none" color="inherit" variant="body2"    sx={linkStyle}>
  {' Audio &amp; Video Game'}
</Link> ,
<Link href="#" underline="none"    sx={linkStyle}>
  {'  Headphone'}
</Link> ,
<Link href="#" underline="none"   sx={linkStyle}>
  {'Phone Accessories'}
</Link> ,
<Link href="#" underline="none"    sx={linkStyle}>
  {' Smart TV'}
</Link> ,
<Link href="#" underline="none"    sx={linkStyle}>
  {'Technologies'}
</Link> ,<Link href="#" underline="none"    sx={linkStyle}>
  {'Virtual Reality Glasses'}
</Link><Link href="#" underline="none"   sx={linkStyle}>
  {'Xbox(Console)'}
</Link>
    

      </Typography>
      <Typography variant="body2" component="p"  sx={{lineHeight: "1.2",}}>
      Tags :
      <Link href="#" underline="none" sx={linkStyle}>
  {' Tag-02'}
</Link> , 
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

