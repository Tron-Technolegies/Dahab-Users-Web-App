import React from "react";

export default function TopThree({ first, second, third, type, myRank }) {
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="relative w-full md:order-1 order-2 max-w-4xl h-[350px]">
          <div className="custom-shape absolute inset-0" />
          <div className="relative z-10 p-6 text-white">
            <div className="flex flex-col gap-2 items-center -mt-10 mb-10">
              {second?.profilePic ? (
                <img
                  src={second?.profilePic}
                  alt="Profile pic"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-white text-black text-2xl grid place-items-center">
                  <p>
                    {second?.name?.slice(0, 1).toUpperCase() ||
                      second?.username?.slice(0, 1).toUpperCase()}
                  </p>
                </div>
              )}

              <p className="text-lg text-[#76C6E066]">
                {second?.name || second?.username}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src="/home/leaderboard-2.png" />
              <p className="text-3xl">
                {type === "Miners"
                  ? second?.totalMiners
                  : type === "BTC"
                  ? second?.minedRevenue.toFixed(7)
                  : second?.totalHashrate}{" "}
                <span className="text-base text-[#3DB2E8AB]">
                  {type === "Miners"
                    ? "Miners"
                    : type === "BTC"
                    ? "BTC"
                    : "TH/s"}
                </span>
              </p>
              {(type === "Miners" || type === "Hashrate") && (
                <p className="text-sm">
                  Earned {second?.totalRevenue.toFixed(7)} BTC
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl h-[350px] -mt-7 md:order-2 order-1">
          <div className="custom-shape absolute inset-0" />
          <div className="relative z-10 p-6 text-white">
            <div className="flex flex-col gap-2 items-center -mt-10 mb-10">
              {first?.profilePic ? (
                <img
                  src={first?.profilePic}
                  alt="Profile pic"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-white text-black text-2xl grid place-items-center">
                  <p>
                    {first?.name?.slice(0, 1).toUpperCase() ||
                      first?.username?.slice(0, 1).toUpperCase()}
                  </p>
                </div>
              )}

              <p className="text-lg text-[#76C6E066]">
                {first?.name || first?.username}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src="/home/leaderboard-1.png" />
              <p className="text-3xl">
                {type === "Miners"
                  ? first?.totalMiners
                  : type === "BTC"
                  ? first?.minedRevenue.toFixed(7)
                  : first?.totalHashrate}{" "}
                <span className="text-base text-[#3DB2E8AB]">
                  {type === "Miners"
                    ? "Miners"
                    : type === "BTC"
                    ? "BTC"
                    : "TH/s"}
                </span>
              </p>
              {(type === "Miners" || type === "Hashrate") && (
                <p className="text-sm">
                  Earned {first?.totalRevenue.toFixed(7)} BTC
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl h-[350px] order-3">
          <div className="custom-shape absolute inset-0" />
          <div className="relative z-10 p-6 text-white">
            <div className="flex flex-col gap-2 items-center -mt-10 mb-10">
              {third?.profilePic ? (
                <img
                  src={third?.profilePic}
                  alt="Profile pic"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-white text-black text-2xl grid place-items-center">
                  <p>
                    {third?.name?.slice(0, 1).toUpperCase() ||
                      third?.username?.slice(0, 1).toUpperCase()}
                  </p>
                </div>
              )}

              <p className="text-lg text-[#76C6E066]">
                {third?.name || third?.username}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src="/home/leaderboard-3.png" />
              <p className="text-3xl">
                {type === "Miners"
                  ? third?.totalMiners
                  : type === "BTC"
                  ? third?.minedRevenue.toFixed(7)
                  : third?.totalHashrate}{" "}
                <span className="text-base text-[#3DB2E8AB]">
                  {type === "Miners"
                    ? "Miners"
                    : type === "BTC"
                    ? "BTC"
                    : "TH/s"}
                </span>
              </p>
              {(type === "Miners" || type === "Hashrate") && (
                <p className="text-sm">
                  Earned {third?.totalRevenue.toFixed(7)} BTC
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {myRank && type === "Miners" && (
        <p className="text-[#FFFFFF99] bg-[#011532] rounded-full p-3 text-center">
          You own{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.totalMiners}
          </span>{" "}
          miners and is ranked{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.position}
          </span>{" "}
          out of{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.totalUsers}
          </span>{" "}
          users
        </p>
      )}
      {myRank && type === "BTC" && (
        <p className="text-[#FFFFFF99] bg-[#011532] rounded-full p-3 text-center">
          You earned{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.minedRevenue.toFixed(8)}
          </span>{" "}
          BTC and is ranked{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.position}
          </span>{" "}
          out of{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.totalUsers}
          </span>{" "}
          users
        </p>
      )}
      {myRank && type === "Hashrate" && (
        <p className="text-[#FFFFFF99] bg-[#011532] rounded-full p-3 text-center">
          You have{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.totalHashrate}
          </span>{" "}
          TH/s and is ranked{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.position}
          </span>{" "}
          out of{" "}
          <span className="text-xl font-semibold text-[#3DB2E8AB]">
            {myRank.totalUsers}
          </span>{" "}
          users
        </p>
      )}
    </div>
  );
}
