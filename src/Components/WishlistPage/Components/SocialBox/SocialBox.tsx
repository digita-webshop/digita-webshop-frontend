import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from '@mui/icons-material/Telegram';
import {
  socialBox,
  SocialFlex,
} from "../../../../Styles/Wishlist";


const SocialBox = () => {
  return (
    <>
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
            <FacebookIcon sx={{ cursor: "pointer" }} />
            <TwitterIcon sx={{ cursor: "pointer" }} />
            <TelegramIcon sx={{ cursor: "pointer" }} />
            <WhatsAppIcon sx={{ cursor: "pointer" }} />
            <ContentCopyIcon sx={{ cursor: "pointer" }} />
            <EmailIcon />
          </Box>
        </SocialFlex>
      </Box>
    </>
  );
};

export default SocialBox;
