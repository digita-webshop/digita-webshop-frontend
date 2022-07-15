
import {
  tabsStyle,
  ShowStyle,
  CascadingTabsTitle,
  CascadingTabs,
  TabLabel,


} from "../../../../Styles/Product";
import Description from "./Description/Description";
import Delivery from "./Delivery/Delivery";
import AboutBranad from "./AboutBranad/AboutBranad";
import Reviews from "./Reviews/Reviews";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import{ Box,Container,Typography} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={ShowStyle}>
    <Box className="TabsShow" sx={{width:"100%"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange}
       centered
        
        sx={tabsStyle}
        
        >
          <Tab label="DESCRIPTION" {...a11yProps(0)} sx={TabLabel} />
          <Tab label="REVIEWS (1)" {...a11yProps(1)} sx={TabLabel}/>
          <Tab label="ABOUT BRANDS" {...a11yProps(2)}sx={TabLabel} />
          <Tab label="SHIPPING 	&#38; DELIVERY" {...a11yProps(3)}sx={TabLabel} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Description />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Reviews />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <AboutBranad />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Delivery />
      </TabPanel>
    </Box>


    {/* ////// */}
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
       {/* </Container> */}
       {/* <Container maxWidth={"lg"}> */}
  <Box>     <Box  sx={CascadingTabs}>
              
              <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              REVIEWS (1)
                    </Typography>
                    </Box>
                     <Reviews />
                     </Box>
       
       {/* </Container> */}
      
       {/* <Container maxWidth={"lg"}> */}
   <Box>
   <Box  sx={CascadingTabs}>
              
              <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              ABOUT BRANDS
                    </Typography></Box>
                     <AboutBranad />
   </Box>
       
       {/* </Container> */}
      
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
