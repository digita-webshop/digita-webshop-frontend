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
import { useState, SyntheticEvent } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { IProduct } from "../../../../Services/Types/product";
import { useGetReviewsQuery } from "../../../../features/reviews/reviewsApi";
import { useSearchParams } from "react-router-dom";
interface Props {
  product: IProduct;
}
function Tabs({ product }: Props) {
  const [openDescription, setOpenDescription] = useState(true);
  const [openReviews, setOpenReviews] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const { data: reviewsData } = useGetReviewsQuery({
    path: "products",
    id: product._id!,
  });
  const reviews = reviewsData?.data ?? [];
  const tabValue = searchParams.get("tab") ?? "review";
  const tabSelectHandler = (event: SyntheticEvent, value: any) => {
    console.log(value);
    if (!value) {
      searchParams.delete("tab");
    } else {
      searchParams.set("tab", value);
    }
    setSearchParams(searchParams);
  };
  return (
    <Box sx={ShowStyle} id="tabs">
      <Box className="TabsShow" sx={{ width: "100%" }}>
        <TabsUnstyled value={tabValue} onChange={tabSelectHandler}>
          <TabsList>
            <Tab value="">DESCRIPTION</Tab>
            <Tab value="reviews">
              {`REVIEWS ${reviews.length !== 0 ? `(${reviews.length})` : ""}`}
            </Tab>
            <Tab value="about">ABOUT BRANDS</Tab>
            <Tab value="delivery"> SHIPPING &#38; DELIVERY</Tab>
          </TabsList>
          <TabPanel value={""}>
            <Description description={product.fullDescription} />
          </TabPanel>
          <TabPanel value={"reviews"}>
            <Reviews id={product._id!} reviews={reviews} />
          </TabPanel>
          <TabPanel value={"about"}>
            <AboutBrand brand={product.brand} />
          </TabPanel>
          <TabPanel value={"delivery"}>
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
              {`REVIEWS ${reviews.length !== 0 ? `(${reviews.length})` : ""}`}
            </Typography>
            <Typography sx={moreStyles}>
              {openReviews ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </Box>
          <Collapse in={openReviews}>
            <Reviews id={product._id!} reviews={reviews} />
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
