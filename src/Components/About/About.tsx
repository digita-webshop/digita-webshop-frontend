import { Container } from "@mui/material";
import Contents from "./Components/Contents/Contents";
import Poster from "./Components/Poster/Poster";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
