import { Box, styled, Typography } from "@mui/material";
import { CustomBreadcrumbs } from "../../../Components";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from '@mui/icons-material/Telegram';
import {
  wrapperStyle,
  wishlistTitle,
  socialBox,
  SocialFlex,
} from "../../../Styles/Wishlist";

const Wishlist = () => {
  return (
    <>
      <CustomBreadcrumbs title={"Wishlist"} />

      <Box maxWidth="1270px" sx={wrapperStyle}>
        <Typography variant="h3" sx={wishlistTitle}>
          Default Wishlist
        </Typography>



        <hr />
        <Box sx={socialBox}>
          <SocialFlex>
            <Typography sx={{ color: "#555" }}>Share on</Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                pl: { md: "4rem", lg: "4rem" },
                color: "#333",
              }}
            >
              <FacebookIcon sx={{cursor:"pointer"}}/>
              <TwitterIcon sx={{cursor:"pointer"}}/>
              <TelegramIcon sx={{cursor:"pointer"}}/>
              <WhatsAppIcon sx={{cursor:"pointer"}}/>
              <ContentCopyIcon sx={{cursor:"pointer"}}/>
              <EmailIcon />
            </Box>
          </SocialFlex>
        </Box>
      </Box>
    </>
  );
};

export default Wishlist;
