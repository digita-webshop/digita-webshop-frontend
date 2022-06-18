import Footer from "./Footer/Footer";

import Navbar from "./Navbar/Navbar";

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
