import React from "react";

export default function TopThree({ first, second, third }) {
  return (
    <div>
      <div className="flex gap-5">
        <div className="relative w-full max-w-4xl h-[350px]">
          <div className="custom-shape absolute inset-0" />
          <div className="relative z-10 p-6 text-white">
            <div className="flex flex-col gap-2 items-center -mt-10 mb-10">
              <div className="w-16 h-16 rounded-full bg-white text-black text-2xl grid place-items-center">
                <p>Y</p>
              </div>
              <p className="text-lg text-[#76C6E066]">user-234</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src="/home/leaderboard-2.png" />
              <p className="text-3xl">
                3 <span className="text-base text-[#3DB2E8AB]">Miners</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl h-[350px] -mt-7">
          <div className="custom-shape absolute inset-0" />
          <div className="relative z-10 p-6 text-white">
            <div className="flex flex-col gap-2 items-center -mt-10 mb-10">
              {first?.profilePic ? (
                <img
                  src={first?.profilePic}
                  alt="Profile pic"
                  className="w-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-white text-black text-2xl grid place-items-center">
                  <p>{first?.name?.slice(0, 1).toUpperCase()}</p>
                </div>
              )}

              <p className="text-lg text-[#76C6E066]">{first?.name}</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src="/home/leaderboard-1.png" />
              <p className="text-3xl">
                {first?.totalMiners}{" "}
                <span className="text-base text-[#3DB2E8AB]">Miners</span>
              </p>
              <p className="text-sm">
                Earned {first?.totalRevenue.toFixed(7)} BTC
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-4xl h-[350px]">
          <div className="custom-shape absolute inset-0" />
          <div className="relative z-10 p-6 text-white">
            <div className="flex flex-col gap-2 items-center -mt-10 mb-10">
              <div className="w-16 h-16 rounded-full bg-white text-black text-2xl grid place-items-center">
                <p>Y</p>
              </div>
              <p className="text-lg text-[#76C6E066]">user-234</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src="/home/leaderboard-3.png" />
              <p className="text-3xl">
                1 <span className="text-base text-[#3DB2E8AB]">Miners</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
