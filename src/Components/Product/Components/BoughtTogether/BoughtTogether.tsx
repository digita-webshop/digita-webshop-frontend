

  import {
    Button,
    Box,
    Typography,
  Grid,
   Divider
  } from "@mui/material";
const BoughtTogether = () => {
  return( 


    < >
    <Box sx={boughtPriceStyle}>
  <Box sx={{margin:"-2rem 0 2rem 0"}}>
   <Typography variant="body2" component="p" sx={BoughtTextStyle}>
                 <ul className="boughtList">
                         <li>This Product: Microsoft Xbox One S Blue Grey – <span className="newPrice">$52.00</span></li>
                         <li>PC Gaming Mainboard B460 – <del className="previousPrice">$29.00</del> <span className="newPrice">$25.00</span></li>
                 </ul>
                 </Typography>
   </Box>
   </Box>
      </>  
  )
};

export default BoughtTogether;
 