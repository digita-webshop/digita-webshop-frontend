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
  Cart,
} from "./Pages/Main";
import {
  AddArticle,
  AddProduct,
  Brands,
  Dashboard,
  Orders,
  Products,
  Reviews,
  Settings,
} from "./Pages/Panel";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import PanelLayout from "./Layouts/PanelLayout/PanelLayout";
import { ScrollToTop } from "./Components";

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
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/panel/*" element={<PanelLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="add-article" element={<AddArticle />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="brands" element={<Brands />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
