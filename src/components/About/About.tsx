import { Box, Container } from "@mui/material";
import Contents from "./Components/Contents/Contents";
import Poster from "./Components/Poster/Poster";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";
import { Helmet } from "react-helmet-async";

const About = () => {
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

export default About;
