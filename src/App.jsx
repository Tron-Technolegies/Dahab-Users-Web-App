import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BuyMinersPage,
  DashBoardPage,
  DetailedPage,
  ErrorPage,
  ForgotPassword,
  Layout,
  LoginPage,
  MyMinerPage,
  OTPVerify,
  PayoutPage,
  Register,
  ResetPassword,
  VerifyCode,
} from "./pages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashBoardPage /> },
        { path: "detailed", element: <DetailedPage /> },
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
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/verify", element: <VerifyCode /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/otp", element: <OTPVerify /> },
  ]);
  return <RouterProvider router={router} />;
}
