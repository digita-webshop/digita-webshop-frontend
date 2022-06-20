import React from "react";

// lib
import { Box, Container } from "@mui/material";

// components
import { ReusableTypography } from "../../Styles/WhatClientSay";
import BlogCard from "./BlogCard/BlogCard";
// import Slider from "../WhatClientSay/Slider/Slider";

// assets
// import iconTitle from "../../Assets/Images/WhatClientSayAssets/icon-title.png";

function OurBlog() {
  return (
    <Container
      maxWidth={false}
      component="section"
      sx={{
        height: "700px",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
        // marginTop: "-100px",
        marginBottom: "-100px",
        position: "relative",
      }}
    >
      <Box maxWidth="xl" sx={{ backgroundColor: "gray" }}>
        <ReusableTypography
          fontWeight="600"
          smallSizeFontSize="20px"
          mediumSizeFontSize="32px"
          component="h2"
          sx={{
            fontSize: 32,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Our blog
        </ReusableTypography>

        <Box sx={{ textAlign: "center", mt: 1, mb: 3 }}>
          {/*<img src={iconTitle} alt="icon" />*/}
        </Box>

        <Box>
          <BlogCard />
        </Box>
      </Box>
    </Container>
  );
}

export default OurBlog;
