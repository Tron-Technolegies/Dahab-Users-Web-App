import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BuyMinersPage,
  DashBoardPage,
  DetailedPage,
  ErrorPage,
  FAQ,
  ForgotPassword,
  Layout,
  LoginPage,
  MyMinerPage,
  Notifications,
  OTPVerify,
  PayoutPage,
  PrivacyPolicy,
  Register,
  ResetPassword,
  Terms,
  TwoFactor,
  UpdateProfile,
  VerifyCode,
  WithdrawPage,
} from "./pages";
import CartPage from "./pages/buyminers/CartPage";

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
        { path: "payouts/withdraw", element: <WithdrawPage /> },
        { path: "buy", element: <BuyMinersPage /> },
        { path: "buy/cart", element: <CartPage /> },
        { path: "profile", element: <UpdateProfile /> },
        { path: "2fA", element: <TwoFactor /> },
        { path: "help", element: <FAQ /> },
        { path: "notifications", element: <Notifications /> },
        { path: "terms", element: <Terms /> },
        { path: "privacy", element: <PrivacyPolicy /> },
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
