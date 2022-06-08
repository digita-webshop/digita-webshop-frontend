import { Footer, Navbar } from "../../Components";

function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
