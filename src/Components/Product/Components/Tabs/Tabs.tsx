import TabsUnstyled from "@mui/base/TabsUnstyled";
import {
  ShowStyle,
  CascadingTabsTitle,
  CascadingTabs,
  TabsList,
  Tab,
  TabPanel,
  moreStyles,
} from "../../../../Styles/Product";
import Description from "./Description/Description";
import Delivery from "./Delivery/Delivery";
import AboutBrand from "./AboutBrand/AboutBrand";
import Reviews from "./Reviews/Reviews";

import { Box, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { IReviews } from "../../../../Services/Utils/Types/product";
interface Props {
  description: string;
  reviews: IReviews[] | [];
  brand: string;
}
function Tabs(props: Props) {
  const [openDescription, setOpenDescription] = useState(true);
  const [openReviews, setOpenReviews] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
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
            <Description description={props.description} />
          </TabPanel>
          <TabPanel value={1}>
            <Reviews reviews={props.reviews} />
          </TabPanel>
          <TabPanel value={2}>
            <AboutBrand brand={props.brand} />
          </TabPanel>
          <TabPanel value={3}>
            <Delivery />
          </TabPanel>
        </TabsUnstyled>
      </Box>

      <Box className="CascadinShow">
        <Box>
          <Box
            sx={CascadingTabs}
            onClick={() => setOpenDescription((prev) => !prev)}
          >
            <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              DESCRIPTION
            </Typography>
            <Typography sx={moreStyles}>
              {openDescription ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </Box>
          <Collapse in={openDescription}>
            <Description description={props.description} />
          </Collapse>
        </Box>

        <Box>
          <Box
            sx={CascadingTabs}
            onClick={() => setOpenReviews((prev) => !prev)}
          >
            <Typography
              variant="h4"
              sx={CascadingTabsTitle}
              component="div"
              id="review"
            >
              REVIEWS (1)
            </Typography>
            <Typography sx={moreStyles}>
              {openReviews ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </Box>
          <Collapse in={openReviews}>
            <Reviews reviews={props.reviews} />
          </Collapse>
        </Box>

        <Box>
          <Box sx={CascadingTabs} onClick={() => setOpenAbout((prev) => !prev)}>
            <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              ABOUT BRANDS
            </Typography>
            <Typography sx={moreStyles}>
              {openAbout ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </Box>
          <Collapse in={openAbout}>
            <AboutBrand brand={props.brand} />
          </Collapse>
        </Box>

        <Box>
          <Box
            sx={CascadingTabs}
            onClick={() => setOpenShipping((prev) => !prev)}
          >
            <Typography variant="h4" sx={CascadingTabsTitle} component="div">
              SHIPPING &#38; DELIVERY
            </Typography>
            <Typography sx={moreStyles}>
              {openShipping ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </Box>
          <Collapse in={openShipping}>
            <Delivery />
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
}

export default Tabs;
