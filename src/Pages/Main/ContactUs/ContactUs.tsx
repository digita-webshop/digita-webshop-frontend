import { Container } from "@mui/system";
import { ContactUsAddress, CustomBreadcrumbs } from "../../../Components";

function ContactUs() {
  return (
    <>
      <CustomBreadcrumbs title={"contact us "} />
      <Container maxWidth={"lg"}>
        <ContactUsAddress />
      </Container>
    </>
  );
}

export default ContactUs;
