import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { supportStyle, itemStyle } from "../../../../Styles/Special"

const SupportItems = () => {
  return (
    <Grid container sx={supportStyle}>
      <Grid item xs={8} sm={5.5} md={4} lg={3}>
        {/* ======== ITEM ======= */}
        <Box sx={itemStyle}>
          <LocalShippingIcon sx={{ color: "#f03637", fontSize: "40px" }} />
          <Box sx={{ marginLeft: "0.6rem" }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#333",
                textTransform: "uppercase",
              }}
            >
              Free Delivery
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#777" }}>
              For all order over $99
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* ======== ITEM ======= */}
      <Grid item xs={8} sm={5.5} md={4} lg={3}>
        <Box sx={itemStyle}>
          <CurrencyExchangeIcon sx={{ color: "#f03637", fontSize: "40px" }} />
          <Box sx={{ marginLeft: "0.6rem" }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#333",
                textTransform: "uppercase",
              }}
            >
              90 days return
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#777" }}>
              If good have problems
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={8} sm={5.5} md={4} lg={3}>
        <Box sx={itemStyle}>
          <PaymentIcon sx={{ color: "#f03637", fontSize: "40px" }} />
          <Box sx={{ marginLeft: "0.6rem" }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#333",
                textTransform: "uppercase",
              }}
            >
              secure payment
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#777" }}>
              100% secure payment
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={8} sm={5.5} md={4} lg={3}>
        <Box sx={itemStyle}>
          <SupportAgentIcon sx={{ color: "#f03637", fontSize: "40px" }} />
          <Box sx={{ marginLeft: "0.6rem" }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#333",
                textTransform: "uppercase",
              }}
            >
              24/7 support
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#777" }}>
              Always ready to help
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SupportItems;