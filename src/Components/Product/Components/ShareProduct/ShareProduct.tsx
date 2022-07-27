import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Grid, Box, Typography } from "@mui/material";
import {
  shareProductText,
  MailIconLayout,
  TwitterIconLayout,
  chanceTwitter,
  ShareStyle,
  itemStyle,
  chanceMail,
  chanceFacebook,
  chancePinteres,
} from "../../../../Styles/Product/index";

const ShareProduct = () => {
  return (
    <Grid container sx={ShareStyle}>
      {/* ======== FacebookOutlinedIcon============================ ======= */}
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Box sx={chanceFacebook}>
          <Box sx={itemStyle}>
            <FacebookOutlinedIcon
              fontSize="large"
              className="Facebookback"
              sx={{
                color: "#000000",
                fontSize: "45px",
                float: "left",
              }}
            />
            <Box sx={{ marginLeft: "0" }}>
              <Typography
                variant="body2"
                className="Facebooktext"
                component="p"
                sx={shareProductText}
              >
                Share on Facebook
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* ======== TwitterIcon===================== ======= */}
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Box sx={chanceTwitter}>
          <Box sx={itemStyle}>
            <Box sx={TwitterIconLayout} className="Twitterback">
              <TwitterIcon
                fontSize="large"
                sx={{
                  fontSize: "25px",

                  color: "#ffffff",
                }}
              />
            </Box>
            <Box sx={{ marginLeft: "0.6rem" }}>
              <Typography
                variant="body2"
                component="p"
                sx={shareProductText}
                className="Twittertext"
              >
                Tweet This Product
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      {/* ======== PinterestIcon============================ ======= */}
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Box sx={chancePinteres}>
          <Box sx={itemStyle}>
            <PinterestIcon
              fontSize="large"
              className="Pinteresback"
              sx={{
                color: "#000000",
                fontSize: "45px",
                float: "left",
              }}
            />
            <Box sx={{ marginLeft: "0" }}>
              <Typography
                variant="body2"
                component="p"
                className="Pinterestext"
                sx={shareProductText}
              >
                Pin This Product
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      {/* ==========================MailIcon================================ */}
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Box sx={chanceMail}>
          <Box sx={itemStyle}>
            <Box sx={MailIconLayout} className="mailback">
              <MailIcon
                fontSize="large"
                sx={{
                  fontSize: "25px",

                  color: "#ffffff",
                }}
              />
            </Box>
            <Box sx={{ marginLeft: "0.6rem" }}>
              <Typography
                variant="body2"
                component="p"
                sx={shareProductText}
                className="mailtext"
              >
                Mail This Product
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ShareProduct;
