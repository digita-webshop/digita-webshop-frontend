//lib
import { Box, Typography } from "@mui/material";

// components
import { ReusableTypography } from "../../../Styles/WhatClientSay";

//assets
import BlogImg from "../../../Assets/Images/OurBlog/blog-1.jpg";
function BlogCard(props: any) {
  return (
    <Box
      sx={{
        padding: "0 15px",
        "& a": { textDecoration: "none", color: "black" },
      }}
    >
      <a href="/">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <img width="370px" src={BlogImg} alt="blog" />
          </Box>
          <Box>
            <Box>
              <Box>
                <Typography> Peter Giroud</Typography>
                <Typography></Typography>
              </Box>
            </Box>

            <Box>
              <Typography component="span" sx={{ fontSize: 20 }}>
                sample post with format image
              </Typography>
            </Box>
          </Box>
        </Box>
      </a>
    </Box>
  );
}

export default BlogCard;
