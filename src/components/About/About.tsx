import { Box, Container } from "@mui/material";
import Contents from "./Components/Contents/Contents";
import Poster from "./Components/Poster/Poster";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";
const About = () => {
  return (
    <Box bgcolor={"white"}>
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
