import TabsUnstyled from "@mui/base/TabsUnstyled";
import {
  ShowStyle,
  CascadingTabsTitle,
  CascadingTabs,
  TabsList,
  Tab,
  TabPanel,
} from "../../../../Styles/Product";
import Description from "./Description/Description";
import Delivery from "./Delivery/Delivery";
import AboutBranad from "./AboutBranad/AboutBranad";
import Reviews from "./Reviews/Reviews";

import { Box, Typography } from "@mui/material";

function Tabs() {
  return (
    <Box sx={ShowStyle}>
      <Box className="TabsShow" sx={{ width: "100%" }}>
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>DESCRIPTION</Tab>
            <Tab>REVIEWS (1)</Tab>
            <Tab>ABOUT BRANDS</Tab>
            <Tab> SHIPPING &#38; DELIVERY</Tab>
          </TabsList>
          <TabPanel value={0}>
            <Description />
          </TabPanel>
          <TabPanel value={1}>
            <Reviews />
          </TabPanel>
          <TabPanel value={2}>
            <AboutBranad />
          </TabPanel>
          <TabPanel value={3}>
            <Delivery />
          </TabPanel>
        </TabsUnstyled>
      </Box>

      <Box className="CascadinShow">
        <Box>
          <Box sx={CascadingTabs}>
            <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              DESCRIPTION
            </Typography>
          </Box>
          <Description />
        </Box>

        <Box>
          <Box sx={CascadingTabs}>
            <Typography
              variant="h4"
              sx={CascadingTabsTitle}
              component="div"
              id="review"
            >
              REVIEWS (1)
            </Typography>
          </Box>
          <Reviews />
        </Box>

        <Box>
          <Box sx={CascadingTabs}>
            <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              ABOUT BRANDS
            </Typography>
          </Box>
          <AboutBranad />
        </Box>

        <Box>
          <Box sx={CascadingTabs}>
            <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              SHIPPING &#38; DELIVERY
            </Typography>
          </Box>
          <Delivery />
        </Box>
      </Box>
    </Box>
  );
}

export default Tabs;
