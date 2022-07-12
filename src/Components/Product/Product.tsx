
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import ProductDetails from "./Components/ProductDetails/ProductDetails"

import { Box, Container, Grid,Typography } from "@mui/material";


const Product = () => {
  return( 


    <Box bgcolor={"white"}>
       <CustomBreadcrumbs title={"product"} />
       <Container maxWidth={"lg"}>
       <ProductDetails />
       </Container>


    
      </Box>  
  )
};

export default Product;
 
