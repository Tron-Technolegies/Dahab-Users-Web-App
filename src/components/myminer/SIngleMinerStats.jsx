import React from "react";
import StatElement1 from "../dashboard/detailed/TopSection/StatElement1";
import FormSelect from "../FormSelect";
import GraphElement1 from "../dashboard/detailed/TopSection/GraphElement1";

export default function SIngleMinerStats({ data }) {
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex flex-col gap-5 w-full">
        <div
          className={`rounded-md  p-5 ${
            data?.status === "Inactive" ? "bg-gray-600" : "bg-[#011532]"
          }`}
        >
          <p className="text-sm">Status</p>
          <div
            className={`my-2 flex lg:flex-row flex-col justify-between lg:items-center `}
          >
            <div className="flex gap-2 items-center">
              <img
                src={`${
                  data?.status === "Active"
                    ? "/home/active.png"
                    : data?.status === "Warning"
                    ? "/home/warning.png"
                    : "/home/inactive.png"
                }`}
                className="w-4"
              />
              <p
                className={`${
                  data?.status === "Active"
                    ? "text-[#07EAD3]"
                    : data?.status === "Warning"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {data?.status}
              </p>
            </div>

            {data?.status !== "Active" && <p>Reason: Fan Failure</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <StatElement1 stat={data?.h24_hashRate} statName={"24H Hashrate"} />
          <StatElement1
            stat={data?.h24_efficiency}
            statName={"24H Share Efficiency"}
          />
          <StatElement1 stat={data?.minedRewards} statName={"Mined Rewards"} />
          <StatElement1
            stat={data?.h24_minedRewards}
            statName={"24H Mined Rewards"}
          />
          <StatElement1 stat={data?.h1_hashRate} statName={"1H Hashrate"} />
          <StatElement1
            stat={data?.h1_validShare}
            statName={"1H Valid Share"}
          />
          <StatElement1
            stat={data?.h1_staleShare}
            statName={"1H Stale Share"}
          />
          <StatElement1
            stat={data?.h1_rejectedShare}
            statName={"1H Rejected Share"}
          />
          <StatElement1 stat={data?.lastShare} statName={"Last Share At"} />
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full">
        <FormSelect list={["24 hr", "7 day", "30 days"]} />
        <GraphElement1 />
      </div>
    </div>
  );
}
