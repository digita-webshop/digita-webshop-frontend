import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Blog, ContactUs, Home, Shop } from "./Pages/Main";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Wishlist from "./Pages/Main/Wishlist/Wishlist";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
