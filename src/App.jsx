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
  Page0,
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
import ProductInnerPage from "./pages/buyminers/ProductInnerPage";
import PayoutSwitchPage from "./pages/PayoutSwitchPage";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Page0 /> },
    {
      path: "/dashboard",
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
        { path: "buy/:id", element: <ProductInnerPage /> },
        { path: "profile", element: <UpdateProfile /> },
        { path: "2fA", element: <TwoFactor /> },
        { path: "help", element: <FAQ /> },
        { path: "notifications", element: <Notifications /> },
        { path: "payout-switch", element: <PayoutSwitchPage /> },
      ],
    },
    { path: "terms", element: <Terms /> },
    { path: "privacy", element: <PrivacyPolicy /> },
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
