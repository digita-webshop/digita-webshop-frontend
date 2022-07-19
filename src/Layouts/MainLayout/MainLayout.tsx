import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


function MainLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Outlet />
      {location.pathname !== "/user" && <Footer />}
    </>
  );
}

export default MainLayout;
