import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'order',
        element: <PrivateRoute><Order /></PrivateRoute>
      },
      {
        path: 'order/:category',
        element: <PrivateRoute><Order /></PrivateRoute>
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
    ]
  },

]);

export default router;