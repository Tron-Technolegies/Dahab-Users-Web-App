import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { TourProvider } from "@reactour/tour";

export default function Layout() {
  const navigate = useNavigate();
  const steps = [
    {
      selector: "#main-stat-card",
      content:
        "This is the main stat card. You can see both the graphical view and statistics here. you can see the detailed page in the see details page",
    },
    {
      selector: "#active-miners",
      content:
        "Gives info of the different miners that are active, inactive and has warning",
    },
    {
      action: () => navigate("/"),
      selector: "#my-miner-nav",
      content: "Now Lets go to my miner page",
    },
    {
      action: () => navigate("/my-miners"),
      selector: "#my-miner-nav",
      content: "You are now on my miner page",
    },
    {
      selector: "#my-miners",
      content:
        "This gives the list of all owned miners. Click one and see its stats",
    },
  ];

  return (
    <div className="text-black">
      <TourProvider steps={steps} scrollSmooth>
        <div className="text-white">
          <Header />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      </TourProvider>
    </div>
  );
}
