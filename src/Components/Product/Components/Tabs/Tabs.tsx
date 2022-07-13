
import {
  tabsStyle,
  ShowStyle,
  productTitle,
  CascadinTabs,


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
          <Tab label="DESCRIPTION" {...a11yProps(0)} />
          <Tab label="REVIEWS (1)" {...a11yProps(1)} />
          <Tab label="ABOUT BRANDS" {...a11yProps(2)} />
          <Tab label="SHIPPING 	&#38; DELIVERY" {...a11yProps(3)} />
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
<Container maxWidth={"lg"}>
<Box  sx={CascadinTabs}>
       
<Typography variant="h4" sx={productTitle} component="div">
Description
      </Typography>
       <Description />
</Box>
       </Container>
       <Container maxWidth={"lg"}>
       <Box  sx={CascadinTabs}>
              
<Typography variant="h4" sx={productTitle} component="div">
Reviews
      </Typography>
       <Reviews />
       </Box>
       </Container>
      
       <Container maxWidth={"lg"}>
       <Box  sx={CascadinTabs}>
              
<Typography variant="h4" sx={productTitle} component="div">
AboutBranad
      </Typography>
       <AboutBranad />
       </Box>
       </Container>
      
       <Container maxWidth={"lg"}>
       <Box  sx={CascadinTabs}>
              
<Typography variant="h4" sx={productTitle} component="div">
Delivery
      </Typography>
       <Delivery />
       </Box>
       </Container>

</Box>
    </Box>
  );
}
