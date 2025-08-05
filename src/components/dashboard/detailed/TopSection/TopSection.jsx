import React, { useContext, useState } from "react";
import FormSelect from "../../../FormSelect";
import StatElement1 from "./StatElement1";
// import ActiveButtonCard from "../../statsSection/ActiveButtonCard";
// import GraphElement1 from "./GraphElement1";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { DashboardContext } from "../../../../DashBoardContext";
import { UserContext } from "../../../../UserContext";

export default function TopSection({ hidden }) {
  const [showInfo, setShowInfo] = useState(false);
  const { user } = useContext(UserContext);
  const {
    totalHashrate,
    totalMiners,
    currentBalance,
    hostingDue,
    minedRevenue,
    avgValidity,
    hostingPaid,
  } = useContext(DashboardContext);
  return (
    <div
      className="flex flex-col gap-7 items-start my-7 w-full h-full"
      id="detailed-total-miners"
    >
      <div className="flex flex-col gap-10 w-full">
        {/* <div className="self-start">
          <FormSelect list={["24 hr", "7 day", "30 days"]} />
        </div> */}

        {/* <GraphElement1 /> */}
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-between w-full ">
        <div className="flex flex-col gap-3 lg:w-2/3" id="dash-stats">
          <StatElement1 stat={totalMiners} statName={"Total Miners"} />
          <StatElement1 stat={`${totalHashrate} TH/s`} statName={"Hashrate"} />
          <StatElement1
            stat={`${minedRevenue?.toFixed(8)} BTC`}
            statName={"Mined Rewards"}
          />
          <StatElement1
            stat={`${currentBalance?.toFixed(8)} BTC`}
            statName={"Current Balance"}
          />
          <StatElement1
            stat={`${hostingPaid} AED`}
            statName={"Total Hosting Fee Paid"}
          />
          <StatElement1
            stat={`${hostingDue} AED`}
            statName={"Hosting Fee Due"}
          />
          <StatElement1
            stat={`${avgValidity} days`}
            statName={"Avg. Validity Left"}
          />
        </div>
        <div className="relative flex flex-col gap-3">
          <div className="flex md:gap-3 gap-2 items-center">
            <p
              className="text-[#07EAD3] cursor-pointer"
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <FaRegCircleQuestion />
            </p>
            <p className="md:text-base text-sm">Your Current Payout Mode</p>
            <p className="md:p-3 p-2 bg-[#011532] md:text-base text-sm rounded-full text-center capitalize">
              BTC {user?.payoutMode}
            </p>
          </div>
          <p className="text-xs text-center">
            You can change this mode on Account settings
          </p>
          {showInfo && (
            <div
              className="bg-[#000518] p-5 rounded-lg max-w-[500px] absolute top-16"
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <p className="text-sm mb-2 text-yellow-400">
                Only able to switch once every 60 days
              </p>
              <p className="text-sm mb-2">BTC Profit</p>
              <div className="text-xs mb-2">
                <li>
                  Electricity cost is auto-deducted from your daily earnings
                </li>
                <li>You receive the remaining profit - withdraw anytime</li>
                <li>Easiest option with no wallets to manage</li>
                <li>Great for short-term profits or passive BTC flow</li>
                <li>You choose the style: saving or spending</li>
              </div>
              <p className="text-sm mb-2">BTC Hold</p>
              <div className="text-xs">
                <li>You receive 100% of the Bitcoin mined</li>
                <li>Electricity is paid separately - in crypto or fiat</li>
                <li>Best for those who want to accumulate and grow Bitcoin</li>
                <li>
                  Like owning a personal BTC ATM - mine daily at a fixed cost
                </li>
                <li>Recommended if you believe Bitcoin will rise over time</li>
              </div>
            </div>
          )}
        </div>
        {/* <div
          className={`flex lg:w-1/3 flex-col justify-center  gap-3 items-center ${
            hidden && "hidden"
          }`}
          id="active-miners"
        >
          <ActiveButtonCard
            icon={"/home/active.png"}
            name={"Active"}
            count={"2"}
          />
          <ActiveButtonCard
            icon={"/home/warning.png"}
            name={"Warning"}
            count={"0"}
          />
          <ActiveButtonCard
            icon={"/home/inactive.png"}
            name={"Inactive"}
            count={"2"}
          />
        </div> */}
      </div>
    </div>
  );
}
