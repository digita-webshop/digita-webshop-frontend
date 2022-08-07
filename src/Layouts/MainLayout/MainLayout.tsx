import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


function MainLayout() {
  const location = useLocation();
  const userLocation = location.pathname.split('/');
  return (
    <>
      <Navbar />
      <Outlet />
      {userLocation[1] !== "user" && <Footer />}
    </>
  );
}

export default MainLayout;
