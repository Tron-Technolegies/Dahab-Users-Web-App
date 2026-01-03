import React, { useState } from "react";
import LeaderBoardTabs from "./LeaderBoardTabs";
import TopThree from "./TopThree";
import {
  useGetBTCLeaderboard,
  useGetHashrateLeaderboard,
  useGetMinerLeaderboard,
} from "../../../hooks/leaderboard/useLeaderboard";
import Loading from "../../Loading";
import MachineTable from "./MachineTable";
import BTCTable from "./BTCTable";
import HashRateTable from "./HashRateTable";

export default function Leaderboard() {
  const [value, setValue] = useState("1");
  const { data: btc } = useGetBTCLeaderboard();
  const { data: hashrate } = useGetHashrateLeaderboard();
  const { isLoading, data: miners } = useGetMinerLeaderboard();
  return isLoading ? (
    <Loading />
  ) : (
    <div className="my-7">
      <p className="text-[#76C6E0] text-xl text-center">
        Top Miners Leaderboard
      </p>
      <p className="text-[#979797] text-center text-sm">
        See who's leading the mining race
      </p>
      <LeaderBoardTabs
        value={value}
        setValue={setValue}
        item1={
          <TopThree
            first={miners.top10?.[0]}
            second={miners.top10?.[1]}
            third={miners.top10?.[2]}
            type={"Miners"}
            myRank={miners.myRank}
          />
        }
        item2={
          <TopThree
            first={btc.top10?.[0]}
            second={btc.top10?.[1]}
            third={btc.top10?.[2]}
            type={"BTC"}
            myRank={btc.myRank}
          />
        }
        item3={
          <TopThree
            first={hashrate.top10?.[0]}
            second={hashrate.top10?.[1]}
            third={hashrate.top10?.[2]}
            type={"Hashrate"}
            myRank={hashrate.myRank}
          />
        }
      />
      {value === "1" && <MachineTable data={miners.top10} />}
      {value === "2" && <BTCTable data={btc.top10} />}
      {value === "3" && <HashRateTable data={hashrate.top10} />}
    </div>
  );
}
