

import {
  
  teamTitleStyle
} from "../../Styles/Product/index";

import { productData } from "../../Services/Utils/Data/data";
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import BoughtTogether from "./Components/BoughtTogether/BoughtTogether"
import Tabs from "./Components/Tabs/Tabs"
import ShareProduct from "./Components/ShareProduct/ShareProduct"
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import ProductItem from "./../Products/Components/ProductItem/ProductItem";

import { Box, Container, Grid,Typography } from "@mui/material";


const Product = () => {
  return( 


    <Box bgcolor={"white"} sx={{overflowX:"hidden"}}>
       <CustomBreadcrumbs title={"product"} />
       <Container maxWidth={"lg"}>
       <ProductDetails />
       </Container>
       <Container maxWidth={"lg"}>
       <BoughtTogether />
       </Container>
       <Container maxWidth={"lg"}>
       <Tabs />
       </Container>
       <Container maxWidth={"lg"}>
       <ShareProduct />
       </Container>
       <Container maxWidth={"lg"}>
       <Box sx={{ textAlign: "left", pb: 8 }}>
       <Typography variant="h4" sx={teamTitleStyle}>
       RELATED PRODUCTS
     </Typography>
       <Grid container spacing={{ xs: 1, md: 2 }}>
             {productData.slice(0, 4).map((item) => (
              <Grid item xs={6} sm={4} md={3} key={item.id}>
                <ProductItem
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  offPrice={item.offPrice}
                  price={item.price}
                  sold={item.sold}
                  starRate={item.starRate}
                  description={item.description}
                  listView={false}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
  
      </Container>


    
      </Box>  
  )
};

export default Product;
 
