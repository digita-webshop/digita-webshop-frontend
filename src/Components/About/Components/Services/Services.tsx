import { Grid, Box, Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

export const supportStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 1,
  bgcolor: "background.paper",
  color: "text.secondary",
  "& svg": {
    my: 1.5,
  },
};
const titleStyle = {
  padding: "8rem 0 1rem 0",
  color: "#333",
  fontSize: "32px",
  fontWeight: "600",
};

export const itemStyle = {
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Services = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={titleStyle}>
          WHY CHOOSE US ?
        </Typography>
      </Box>
      <Grid container sx={supportStyle}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          {/* ======== ITEM ======= */}
          <Box sx={itemStyle}>
            <Box sx={{ marginLeft: "0.6rem" }}>
            <SettingsIcon sx={{ color: "#f03637", fontSize: "65px" }} />
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#333",
                  textTransform: "capitalize",
                  fontSize: '18px',
                }}
              >
                A Dedicated Smart-Dashboard
              </Typography>
              <Typography sx={{ fontWeight: 400, color: "#777",mt: 1 }}>
                Manage donors, donations, send ‘thank you’ notes to well-wishers
                much more
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* ======== ITEM ======= */}
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Box sx={itemStyle}>
            <Box sx={{ marginLeft: "0.6rem" }}>
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
              <Typography sx={{ fontWeight: 400, color: "#777",mt: 1 }}>
                Transfer donations instantly to your bank account, with just one
                click
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Box sx={itemStyle}>
            <Box sx={{ marginLeft: "0.6rem" }}>
            <AccessibilityNewIcon sx={{ color: "#f03637", fontSize: "65px" }} />
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                Intuitive User Experience
              </Typography>
              <Typography sx={{ fontWeight: 400, color: "#777",mt: 1 }}>
                Designed to optimise donation flow, help you reach your goal
                faster
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Box sx={itemStyle}>
            <Box sx={{ marginLeft: "0.6rem" }}>
            <CreditScoreIcon sx={{color: "#f03637", fontSize: "65px" }} />
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
                Donors can use use payment modes such as PayTM, Tez, UPI, Debit
                Card, Credit,...
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
