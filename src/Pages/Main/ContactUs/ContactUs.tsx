import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {
  ContactUsAddress,
  ContactUsForm,
  CustomBreadcrumbs,
} from "../../../Components";

function ContactUs() {
  return (
    <>
      <CustomBreadcrumbs title={"contact us "} />
      <Container maxWidth={"lg"}>
        <ContactUsAddress />
        <Grid container spacing={3} marginY={6}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <ContactUsForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactUs;
