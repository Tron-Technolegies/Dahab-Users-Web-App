import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  BuyMinersPage,
  CartPage,
  CryptoTransactions,
  DashBoardPage,
  DetailedPage,
  EmailPrompt,
  ErrorPage,
  FAQ,
  ForgotPassword,
  Layout,
  LoginPage,
  MyMinerPage,
  Notifications,
  OTPVerify,
  Page0,
  PaymentCancel,
  PaymentFailure,
  PaymentSuccess,
  PayoutPage,
  PayoutSwitchPage,
  PrivacyPolicy,
  ProductInnerPage,
  Register,
  ResetPassword,
  SuccessPage,
  Terms,
  TwoFactor,
  TwoFactorLoginPage,
  UpdateProfile,
  VerifyCode,
  WalletPage,
  WithdrawPage,
} from "./pages";
import RechargePage from "./components/wallet/RechargePage";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
    },
  },
});

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Page0 />, errorElement: <ErrorPage /> },
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
        { path: "success", element: <SuccessPage /> },
        { path: "buy/:id", element: <ProductInnerPage /> },
        { path: "profile", element: <UpdateProfile /> },
        { path: "wallet", element: <WalletPage /> },
        { path: "wallet/recharge", element: <RechargePage /> },
        { path: "2fA", element: <TwoFactor /> },
        { path: "help", element: <FAQ /> },
        { path: "notifications", element: <Notifications /> },
        { path: "payout-switch", element: <PayoutSwitchPage /> },
        { path: "crypto-transactions", element: <CryptoTransactions /> },
      ],
    },
    { path: "terms", element: <Terms /> },
    { path: "privacy", element: <PrivacyPolicy /> },
    {
      path: "/login",
      element: <LoginPage />,
    },
    { path: "/verify2FA", element: <TwoFactorLoginPage /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/verify", element: <VerifyCode /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/verify-account", element: <EmailPrompt /> },
    { path: "/otp", element: <OTPVerify /> },
    { path: "/ziina-success", element: <PaymentSuccess /> },
    { path: "/ziina-failure", element: <PaymentFailure /> },
    { path: "/ziina-cancel", element: <PaymentCancel /> },
  ]);
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
