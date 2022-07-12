
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Grid, Box, Typography } from "@mui/material";

const ShareProduct = () => {
   
    return(
        <Box >
             
<FacebookOutlinedIcon fontSize="large" className="Facebookback" sx={{
                  color:"#000000",
       fontSize:"45px" ,
       float:"left",
     
                   }} />

<TwitterIcon fontSize="large"    sx={{
        fontSize:"25px" ,
        
        color: '#ffffff',
      
                  
                   }}/>
  <PinterestIcon fontSize="large" className="Pinteresback" sx={{
                       color:"#000000",
           fontSize:"45px" ,
           float:"left",
                      }} />
    <MailIcon fontSize="large"  sx={{
             fontSize:"25px" ,
            
             color: '#ffffff',
           }}/>


      </Box>
    )
   };
   
   export default ShareProduct;
   