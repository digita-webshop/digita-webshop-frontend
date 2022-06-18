import FooterList from "./FooterList/FooterList";
import Subscription from "./Subscription/Subscription";
import { Grid, Typography, Link, Box } from "@mui/material";

const companyInfo = [
  "about us",
  "contact us",
  "blog",
  "business with us",
  "find a store",
];
const letUsHelpYou = [
  "orders",
  "downloads",
  "addresses",
  "account details",
  "lost password",
];
const quickLinks = [
  "special offers",
  "gift cards ",
  "privacy policy",
  "Terms of Use",
  "portfolio",
];
const userFullLinks = [
  "latest products",
  "top rating",
  "best selling",
  "featured products",
  "new collection",
];
function Footer() {
  return (
    <Box
      sx={{
        minHeight: "560px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#092240",
      }}
    >
      <Grid
        container
        height="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={6} sm={4} md={2} lg={2}>
          <FooterList title={"company info"} links={companyInfo} />
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={2}>
          <FooterList title={"let us help you"} links={letUsHelpYou} />
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={2}>
          <FooterList title={"quick links"} links={quickLinks} />
        </Grid>
        <Grid item xs={6} sm={4} md={2} lg={2}>
          <FooterList title={"userfull links"} links={userFullLinks} />
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={4}>
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
        <Typography
          variant="body1"
          color="lightslategray"
          my={4}
          mx={2}
          textAlign="center"
        >
          Copyright © 2022{" "}
          <Link sx={{ color: "#fff", cursor: "pointer" }}>Digita</Link> - All
          Rights Reserved - Powered by{" "}
          <Link sx={{ color: "#fff", cursor: "pointer" }}>Digita</Link>.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
