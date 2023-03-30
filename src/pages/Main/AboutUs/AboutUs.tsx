import { Box, Container } from "@mui/material";
import { Poster, Contents, Services, Team } from "components/About";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <Box bgcolor={"white"}>
      <Helmet>
        <title>Digita | About us</title>
      </Helmet>
      <Container maxWidth={"xl"}>
        <Poster />
      </Container>
      <Container maxWidth={"lg"}>
        <Contents />
      </Container>
      <Services />
      <Container maxWidth={"lg"}>
        <Team />
      </Container>
    </Box>
  );
};

export default AboutUs;
