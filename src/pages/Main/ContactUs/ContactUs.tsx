import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Breadcrumbs } from "components";
import { Address, Form, Map } from "components/Contact";
import { Helmet } from "react-helmet-async";

function ContactUs() {
  return (
    <Box bgcolor={"white"}>
      <Helmet>
        <title>Digita | Contact us</title>
      </Helmet>
      <Breadcrumbs title={"contact us "} />
      <Container maxWidth={"lg"}>
        <Address />
        <Grid container spacing={3} paddingY={6}>
          <Grid item xs={12} md={6}>
            <Map />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUs;
