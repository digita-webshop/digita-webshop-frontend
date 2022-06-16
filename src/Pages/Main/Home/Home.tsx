import { Container } from "@mui/material";
import { Products, Special, Header } from "../../../Components";

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth={"xl"}>
        <Products />
        <Special />
      </Container>
    </>
  );
}

export default Home;
