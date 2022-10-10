import { useRoutes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import PanelLayout from "../layouts/PanelLayout/PanelLayout";
import UserLayout from "../layouts/UserLayout/UserLayout";

import { AboutUs, Article, Blog, Cart, Checkout, ContactUs, Home, PageNotFound, Product, Shop } from "../pages/Main";
import {
  AddArticle,
  AddProduct,
  Articles,
  Brands,
  Dashboard,
  ManageAccess,
  Orders,
  Products,
  Reviews,
  Settings,
  UserOrders as AdminOrders,
} from "../pages/Panel/Admin";
import { Addresses, Info, Status, UserOrders, Wishlist } from "../pages/Panel/User";

import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  let mainRoutes = [
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/product/:id", element: <Product /> },
        { path: "/blog", element: <Blog /> },
        { path: "/article/:id", element: <Article /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/cart", element: <Cart /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ];

  let userRoutes = [
    {
      path: "/user/*",
      element: (
        <PrivateRoute>
          <UserLayout />
        </PrivateRoute>
      ),
      children: [
        { path: "personal-info", element: <Info /> },
        { path: "status", element: <Status /> },
        { path: "addresses", element: <Addresses /> },
        { path: "orders", element: <UserOrders /> },
        { path: "wishlist", element: <Wishlist /> },
      ],
    },
  ];

  let adminRoutes = [
    {
      path: "/panel/*",
      element: (
        <PrivateRoute>
          <PanelLayout />
        </PrivateRoute>
      ),
      children: [
        { path: "dashboard", element: <Dashboard /> },
        {
          path: "products/*",
          children: [
            { path: "list", element: <Products /> },
            { path: "add", element: <AddProduct /> },
            { path: "reviews", element: <Reviews /> },
            { path: "edit/:id", element: <AddProduct /> },
          ],
        },
        {
          path: "articles/*",
          children: [
            { path: "list", element: <Articles /> },
            { path: "add", element: <AddArticle /> },
            { path: "reviews", element: <Reviews /> },
            { path: "edit/:id", element: <AddArticle /> },
          ],
        },
        { path: "manage-users", element: <ManageAccess /> },
        { path: "orders", element: <Orders /> },
        { path: "brands", element: <Brands /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "my-orders", element: <AdminOrders /> },
        { path: "manage-access", element: <ManageAccess /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ];

  const routes = useRoutes([...mainRoutes, ...userRoutes, ...adminRoutes]);
  return routes;
}

export default AppRoutes;
