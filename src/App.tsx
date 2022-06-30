import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Blog,
  ContactUs,
  Home,
  Shop,
  Wishlist,
  Checkout,
} from "./Pages/Main";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import { ScrollToTop } from "./Components";
import PanelLayout from "./Layouts/PanelLayout/PanelLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/panel/*" element={<PanelLayout />}>
              <Route path="dashboard" />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
