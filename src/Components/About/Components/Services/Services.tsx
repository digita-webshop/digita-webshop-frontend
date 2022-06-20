import { Grid, Box, Typography, Container } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import {
  serviceStyle,
  serviceTitle,
  itemStyle,
} from "../../../../Styles/About";

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#F9F9F9", marginTop: "60px" }}>
      <Container maxWidth={"lg"} sx={{ padding: "80px 0" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={serviceTitle}>
            WHY CHOOSE US ?
          </Typography>
        </Box>
        <Grid container sx={serviceStyle}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            {/* ======== ITEM ======= */}
            <Box sx={itemStyle}>
              <Box>
                <SettingsIcon sx={{ color: "#f03637", fontSize: "65px" }} />
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#333",
                    textTransform: "capitalize",
                    fontSize: "18px",
                  }}
                >
                  A Dedicated Smart-Dashboard
                </Typography>
                <Typography sx={{ fontWeight: 400, color: "#777", mt: 1 }}>
                  Manage donors, donations, send ‘thank you’ notes to
                  well-wishers much more
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ======== ITEM ======= */}
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box sx={itemStyle}>
              <Box>
                <PriceCheckIcon sx={{ color: "#f03637", fontSize: "65px" }} />
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#333",
                    textTransform: "capitalize",
                  }}
                >
                  Withdraw Funds Instantly
                </Typography>
                <Typography sx={{ fontWeight: 400, color: "#777", mt: 1 }}>
                  Transfer donations instantly to your bank account, with just
                  one click
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box sx={itemStyle}>
              <Box>
                <AccessibilityNewIcon
                  sx={{ color: "#f03637", fontSize: "65px" }}
                />
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#333",
                    textTransform: "capitalize",
                  }}
                >
                  Intuitive User Experience
                </Typography>
                <Typography sx={{ fontWeight: 400, color: "#777", mt: 1 }}>
                  Designed to optimise donation flow, help you reach your goal
                  faster
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Box sx={itemStyle}>
              <Box>
                <CreditScoreIcon sx={{ color: "#f03637", fontSize: "65px" }} />
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#333",
                    textTransform: "capitalize",
                  }}
                >
                  International Payment Support
                </Typography>
                <Typography sx={{ fontWeight: 400, color: "#777", mt: 1 }}>
                  Donors can use as PayTM, Tez, UPI, Debit Card, Credit,...
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
