import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BuyMinersPage,
  DashBoardPage,
  ErrorPage,
  Layout,
  MyMinerPage,
  PayoutPage,
} from "./pages";
import LoginPage from "./pages/Login/LoginPage";
import Register from "./pages/Register/Register";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashBoardPage /> },
        { path: "my-miners", element: <MyMinerPage /> },
        { path: "payouts", element: <PayoutPage /> },
        { path: "buy", element: <BuyMinersPage /> },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    { path: "/register", element: <Register /> },
  ]);
  return <RouterProvider router={router} />;
}
