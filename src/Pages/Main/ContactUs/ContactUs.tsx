import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import {
  ContactUsAddress,
  ContactUsForm,
  CustomBreadcrumbs,
  Map,
} from "../../../Components";

function ContactUs() {
  return (
    <Box bgcolor={"white"}>
      <CustomBreadcrumbs title={"contact us "} />
      <Container maxWidth={"lg"}>
        <ContactUsAddress />
        <Grid container spacing={3} paddingY={6}>
          <Grid item xs={12} md={6}>
            <Map />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactUsForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUs;
