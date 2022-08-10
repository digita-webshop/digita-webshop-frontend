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
  Article,
  Product,
} from "./Pages/Main";

import {
  AddArticle,
  AddProduct,
  Brands,
  Dashboard,
  ManageAccess,
  PanelWishlist,
  PanelOrders,
  Orders,
  Products,
  Reviews,
  Settings,
} from "./Pages/Panel/Admin";

import {
  Orders as UserOrders,
  Addresses,
  Wishlist as UserWishlist,
  Status,
  PersonalInfo,
} from "./Pages/Panel/User";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import PanelLayout from "./Layouts/PanelLayout/PanelLayout";
import { ScrollToTop, EditProduct } from "./Components";
import UserLayout from "./Layouts/UserLayout/UserLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/user/*" element={<UserLayout />}>
                <Route path="personal-info" element={<PersonalInfo />} />
                <Route path="status" element={<Status />} />
                <Route path="addresses" element={<Addresses />} />
                <Route path="orders" element={<UserOrders />} />
                <Route path="wishlist" element={<UserWishlist />} />
              </Route>
            </Route>
            <Route path="/panel/*" element={<PanelLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<EditProduct />} />
              <Route path="orders" element={<Orders />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="add-article" element={<AddArticle />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="brands" element={<Brands />} />
              <Route path="wishlist" element={<PanelWishlist />} />
              <Route path="my-orders" element={<PanelOrders />} />
              <Route path="manage-access" element={<ManageAccess />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
