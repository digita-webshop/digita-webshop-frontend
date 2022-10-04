import { useRoutes } from "react-router-dom";

import MainLayout from "@/Layouts/MainLayout/MainLayout";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout/AdminPanelLayout";
import UserPanelLayout from "@/Layouts/UserPanelLayout/UserPanelLayout";

import {
  AboutUs,
  Article,
  Blog,
  Cart,
  Checkout,
  ContactUs,
  Home,
  Product,
  Shop,
} from "@/Pages/Main";
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
} from "@/Pages/Panel/Admin";
import {
  Addresses,
  Info,
  Status,
  UserOrders,
  Wishlist,
} from "@/Pages/Panel/User";

import PrivateRoute from "./PrivateRoute";

function Routes() {
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
      ],
    },
  ];

  let userRoutes = [
    {
      path: "/user/*",
      element: (
        <PrivateRoute>
          <UserPanelLayout />
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
          <AdminPanelLayout />
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

export default Routes;
