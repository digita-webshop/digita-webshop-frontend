import { Box } from "@mui/material";
import Contents from "./Components/Contents/Contents";
import Poster from "./Components/Poster/Poster";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";

const About = () => {
  return (
    <>
      <Poster />
      <Box maxWidth={"lg"} mx={"auto"}>
        <Contents />
      </Box>
      <Box maxWidth={"lg"} mx={"auto"}>
        <Services />
        <Team />
      </Box>
    </>
  );
};

export default About;
