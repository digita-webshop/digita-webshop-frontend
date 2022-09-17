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
import { IProduct } from "../../../../Services/Types/product";
interface Props {
  product: IProduct;
}
function Tabs({ product }: Props) {
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
            <Tab>
              {`REVIEWS ${
                product?.reviews && product?.reviews.length !== 0
                  ? `(${product?.reviews.length})`
                  : ""
              }`}
            </Tab>
            <Tab>ABOUT BRANDS</Tab>
            <Tab> SHIPPING &#38; DELIVERY</Tab>
          </TabsList>
          <TabPanel value={0}>
            <Description description={product.fullDescription} />
          </TabPanel>
          <TabPanel value={1}>
            <Reviews product={product} />
          </TabPanel>
          <TabPanel value={2}>
            <AboutBrand brand={product.brand} />
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
            <Description description={product.fullDescription} />
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
            <Reviews product={product} />
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
            <AboutBrand brand={product.brand} />
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
