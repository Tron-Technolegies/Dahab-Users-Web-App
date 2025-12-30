import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
// import { TourProvider, useTour } from "@reactour/tour";
import AlertBox from "../components/Alert";
import { UserContext } from "../UserContext";
import Loading from "../components/Loading";
import useGetBitCoinData, {
  useGetBTCData,
} from "../hooks/coins/useGetBitCoinData";
import TermsUpdatePopup from "../components/termsAndPrivacy/TermsUpdatePopup";
import DeleteAccountPopup from "../components/deleteAccount/DeleteAccountPopup";
import DeleteAccount2FA from "../components/deleteAccount/DeleteAccount2FA";
import { useGetSats } from "../hooks/useGetSats";
import { useGetLatestTerms } from "../hooks/termsAndPrivacy/useGetCurrent";
import { useGetUserInfo } from "../hooks/auth/useGetUserInfo";

export default function Layout() {
  const navigate = useNavigate();
  // const { setIsOpen, setCurrentStep } = useTour();

  const {
    alertError,
    alertSuccess,
    setAlertError,
    setAlertSuccess,
    refetchTrigger,
    termsOpen,
    setTermsOpen,
    deleteAccountPopup,
    setDeleteAccountPopup,
    deleteAccount2fa,
    setDeleteAccount2fa,
    setUser,
  } = useContext(UserContext);

  const {} = useGetSats();
  const {} = useGetBTCData();
  const {} = useGetLatestTerms();
  const user = useLoaderData();
  const { isLoading, data } = useGetUserInfo();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, isLoading]);

  return (
    <div className="text-black">
      {/* <TourProvider steps={steps} scrollSmooth> */}
      <div className="text-white">
        <Header />
        <TermsUpdatePopup open={termsOpen} setOpen={setTermsOpen} />
        <DeleteAccountPopup
          open={deleteAccountPopup}
          setOpen={setDeleteAccountPopup}
        />

        <DeleteAccount2FA
          open={deleteAccount2fa}
          setOpen={setDeleteAccount2fa}
        />

        <div className="min-h-screen relative">
          {alertSuccess && (
            <AlertBox
              message={alertSuccess}
              severity={"success"}
              onClose={() => setAlertSuccess("")}
            />
          )}
          {alertError && (
            <AlertBox
              message={alertError}
              severity={"error"}
              onClose={() => setAlertError("")}
            />
          )}
          <Outlet />
        </div>
        <Footer />
      </div>
      {/* </TourProvider> */}
    </div>
  );
}

// const steps = [
//   {
//     action: () => navigate("/dashboard"),
//     selector: "#navbar",
//     content: "Now Lets begin the tour",
//   },
//   {
//     selector: "#dash-stats",
//     content:
//       " You can see the combined hashrate, share efficiency and mined rewards of all your miners here",
//   },

//   {
//     selector: "#active-miners",
//     content:
//       "Gives info of the different miners that are active, inactive and has warning",
//   },
//   {
//     selector: "#alert-box",
//     content: "This gives you info of miners that are offline or has warning",
//   },
//   {
//     selector: "#payout-selector-1",
//     content: "You can switch between the payout modes here",
//   },
//   {
//     action: () => navigate("/dashboard"),
//     selector: "#navbar",
//     content: "Now Lets go to the detailed page",
//   },
//   {
//     action: () => navigate("/detailed"),
//     selector: "#navbar",
//     content: "You are now on the detailed page",
//   },
//   {
//     selector: "#miner-table",
//     content: "This gives data of all the individual miners with stats",
//   },
//   {
//     action: () => navigate("/detailed"),
//     selector: "#my-miner-nav",
//     content: "Now Lets go to my miner page",
//   },
//   {
//     action: () => navigate("/my-miners"),
//     selector: "#my-miner-nav",
//     content: "You are now on my miner page",
//   },
//   {
//     selector: "#my-miners",
//     content:
//       "This gives the list of all owned miners. Click one and see its stats",
//   },
//   {
//     action: () => navigate("/my-miners"),
//     selector: "#payouts-nav",
//     content: "Now Lets go to payouts page",
//   },
//   {
//     action: () => navigate("/payouts"),
//     selector: "#payouts-nav",
//     content: "You are now on payouts page",
//   },
//   {
//     selector: "#payout-table",
//     content: "You can switch between the payouts and rewards table here",
//   },
//   {
//     selector: "#withdraw",
//     content: "You can manually withdraw your amount from here",
//   },
//   {
//     action: () => navigate("/payouts"),
//     selector: "#navbar",
//     content: "Now go to withdraw page",
//   },
//   {
//     action: () => navigate("/payouts/withdraw"),
//     selector: "#navbar",
//     content: "You are now on withdraw page",
//   },
//   {
//     selector: "#balance-box",
//     content: "You can see your current BTC balance here",
//   },
//   {
//     selector: "#withdraw-form",
//     content:
//       "You can select the amount you need from your available balance and transfer it into your BTC Wallet",
//   },
// ];
