import { Container } from "@mui/system";
import { Footer, Navbar } from "../../Components";

function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container maxWidth={"xl"}>{children}</Container>
      <Footer />
    </>
  );
}

export default MainLayout;
