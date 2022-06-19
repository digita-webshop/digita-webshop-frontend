import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {
  ContactUsAddress,
  ContactUsForm,
  CustomBreadcrumbs,
  Map,
} from "../../../Components";

function ContactUs() {
  return (
    <>
      <CustomBreadcrumbs title={"contact us "} />
      <Container maxWidth={"lg"}>
        <ContactUsAddress />
        <Grid container spacing={3} marginY={6}>
          <Grid item xs={12} md={6}>
            <Map
            // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
            // loadingElement={<div style={{ height: `100%` }} />}
            // containerElement={<div style={{ height: `400px` }} />}
            // mapElement={<div style={{ height: `100%` }} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactUsForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactUs;
