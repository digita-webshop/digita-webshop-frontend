import FooterList from "./FooterList/FooterList";
import Subscription from "./Subscription/Subscription";
import { Grid, Typography, Link, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { companyInfo, letUsHelpYou, quickLinks, userFullLinks } from "./data";

function Footer() {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        paddingTop: pathname.length === 1 ? "160px" : "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#092240",
        fontFamily: "jost",
      }}
    >
      <Grid container height="100%" display="flex" justifyContent="space-around" alignItems="center">
        <Grid item xs={6} sm={4} md={2} alignSelf={"flex-start"}>
          <FooterList title={"company info"} links={companyInfo} />
        </Grid>
        <Grid item xs={6} sm={4} md={2} alignSelf={"flex-start"}>
          <FooterList title={"let us help you"} links={letUsHelpYou} />
        </Grid>
        <Grid item xs={6} sm={4} md={2} alignSelf={"flex-start"}>
          <FooterList title={"quick links"} links={quickLinks} />
        </Grid>
        <Grid item xs={6} sm={4} md={2} alignSelf={"flex-start"}>
          <FooterList title={"userfull links"} links={userFullLinks} />
        </Grid>
        <Grid item xs={12} sm={8} md={4} alignSelf={"flex-start"}>
          <Subscription />
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: "20px auto 0",
          borderTop: "1px solid #9d9d9d99",
          width: "100%",
        }}
      >
        <Typography variant="body1" color="lightslategray" my={4} mx={2} textAlign="center">
          Copyright © 2022 <Link sx={{ color: "#fff", cursor: "pointer" }}>Digita</Link> - All Rights Reserved - Powered
          by <Link sx={{ color: "#fff", cursor: "pointer" }}>Digita</Link>.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
