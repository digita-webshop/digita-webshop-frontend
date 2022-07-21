import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import {
  
  ShowStyle,
  CascadingTabsTitle,
  CascadingTabs,
 


} from "../../../../Styles/Product";
import Description from "./Description/Description";
import Delivery from "./Delivery/Delivery";
import AboutBranad from "./AboutBranad/AboutBranad";
import Reviews from "./Reviews/Reviews";

import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

import{ Box,Container,Typography} from '@mui/material';




const Tab = styled(TabUnstyled)`
white-space: nowrap;
height:100%;
font-size:18px;
font-weight: 450;
text-transform: uppercase;
padding: 19px 18px;
line-height: 1;
display: inline-block !important;
background-color: #f5f5f5;
border: none;
color: #ababab;
margin: 0 0.75rem;
 
&:hover {
  color: #333333;
}
  &.${tabUnstyledClasses.selected} {
   border-bottom-style:solid;
   border-bottom-color:#F03637;
   color:#333333;
  }

  &.${buttonUnstyledClasses.disabled} {

  }
`;

const TabPanel = styled(TabPanelUnstyled)`
margin-top:30px;
  width: 90%;
  text-align: center;

`;

const TabsList = styled(TabsListUnstyled)`
display: block;

width: 100%;

margin-bottom: 20px;
text-align: center;
padding: 0px 20px;
margin-top: 0px;
background-color: #f5f5f5;
border: none;

    z-index: 1;
box-sizing: border-box;




border-color: #eaeaea;
`;
export default function UnstyledTabsCustomized() {
  return (
    <Box sx={ShowStyle}>
    <Box className="TabsShow" sx={{width:"100%"}}>
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>DESCRIPTION</Tab>
        <Tab>REVIEWS (1)</Tab>
        <Tab>ABOUT BRANDS</Tab>
         <Tab> SHIPPING 	&#38; DELIVERY</Tab>
      </TabsList>
      <TabPanel value={0}><Description /></TabPanel>
      <TabPanel value={1}><Reviews /></TabPanel>
      <TabPanel value={2}> <AboutBranad /></TabPanel>
      <TabPanel value={3}> <Delivery /></TabPanel>
    </TabsUnstyled>
      
    </Box>


  
<Box className="CascadinShow">
{/* <Container maxWidth={"lg"}> */}
<Box>
<Box  sx={CascadingTabs}>
       
       <Typography variant="h4" sx={CascadingTabsTitle} component="div">
       DESCRIPTION
             </Typography>
             </Box>
              <Description />
       
</Box>
      
  <Box>    
     <Box  sx={CascadingTabs}>
              
              <Typography variant="h4" sx={CascadingTabsTitle} component="div"  id="review">
              REVIEWS (1)
                    </Typography>
                    </Box>
                     <Reviews />
                     </Box>
       
  
   <Box>
   <Box  sx={CascadingTabs}>
              
              <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              ABOUT BRANDS
                    </Typography></Box>
                     <AboutBranad />
   </Box>
       
 
      
   <Box>
   <Box  sx={CascadingTabs}>
              
              <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              SHIPPING 	&#38; DELIVERY
                    </Typography></Box>
                     <Delivery />
   </Box>
       
     

</Box>
    </Box>
  );
}
