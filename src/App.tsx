import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Blog,
  ContactUs,
  Home,
  Shop,
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
  Wishlist as PanelWishlist,
  UserOrders,
  Orders,
  Products,
  Reviews,
  Settings,
  Articles,
} from "./Pages/Panel/Admin";

import {
  Orders as UserOrderss,
  Addresses,
  Wishlist as UserWishlist,
  Status,
  Info,
} from "./Pages/Panel/User";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import PanelLayout from "./Layouts/PanelLayout/PanelLayout";
import { ScrollToTop } from "./Components";
import UserLayout from "./Layouts/UserLayout/UserLayout";
import { useEffect } from "react";
import { useAppSelector } from "./store";
import { useDispatch } from "react-redux";
import { logout, setCredentials } from "./features/auth/authSlice";
import { useGetUserQuery } from "./features/user/userApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const { id } = useAppSelector((state) => state.reducer.auth);

  const dispatch = useDispatch();

  const { data: userData } = useGetUserQuery(id);
  const user = userData?.data;

  useEffect(() => {
    if (user) {
      dispatch(
        setCredentials({
          user,
          role: user.role!,
          email: null,
        })
      );
    } else {
      dispatch(logout());
    }
  }, [user, dispatch]);

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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route
              path="/user/*"
              element={
                <PrivateRoute>
                  <UserLayout />
                </PrivateRoute>
              }
            >
              <Route path="personal-info" element={<Info />} />
              <Route path="status" element={<Status />} />
              <Route path="addresses" element={<Addresses />} />
              <Route path="orders" element={<UserOrders />} />
              <Route path="wishlist" element={<UserWishlist />} />
            </Route>
            <Route
              path="/panel/*"
              element={
                <PrivateRoute>
                  <PanelLayout />
                </PrivateRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products/*">
                <Route path="list" element={<Products />} />
                <Route path="add" element={<AddProduct />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="edit/:id" element={<AddProduct />} />
              </Route>
              <Route path="articles/*">
                <Route path="list" element={<Articles />} />
                <Route path="add" element={<AddArticle />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="edit/:id" element={<AddArticle />} />
              </Route>
              <Route path="manage-users" element={<ManageAccess />} />
              <Route path="orders" element={<Orders />} />
              <Route path="brands" element={<Brands />} />
              <Route path="wishlist" element={<PanelWishlist />} />
              <Route path="my-orders" element={<UserOrderss />} />
              <Route
                path="manage-access"
                element={
                  <PrivateRoute>
                    <ManageAccess />
                  </PrivateRoute>
                }
              />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
