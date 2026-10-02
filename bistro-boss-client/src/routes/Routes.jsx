import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";


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
        element: <Order />
      },
      {
        path: 'order/:category',
        element: <Order />
      }
    ]
  },
]);

export default router;