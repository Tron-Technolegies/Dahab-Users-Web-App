import React from "react";
import StatElement1 from "../dashboard/detailed/TopSection/StatElement1";
import FormSelect from "../FormSelect";
import GraphElement1 from "../dashboard/detailed/TopSection/GraphElement1";
import dayjs from "dayjs";

export default function SIngleMinerStats({ data }) {
  const future = dayjs(data?.validity);
  const today = dayjs();
  const daysLeft = future.diff(today, "day");
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex flex-col gap-10 w-full">
        {/* <FormSelect list={["24 hr", "7 day", "30 days"]} /> */}
        {/* <GraphElement1 /> */}
      </div>
      <div className="flex flex-col gap-5 w-full">
        {/* <div
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
        </div> */}
        <div className="grid md:grid-cols-2 gap-3">
          <StatElement1 stat={`${data?.qty}`} statName={"Total Miners"} />
          <StatElement1 stat={`${data?.batchId}`} statName={"Batch No"} />
          <StatElement1
            stat={`${data?.itemId?.hashRate * data?.qty} TH/s (${
              data?.itemId?.hashRate
            } TH/s x ${data?.qty})`}
            statName={"Total Hashrate"}
          />
          <StatElement1
            stat={`${(data?.itemId?.power * data?.qty).toFixed(2)} KW/h (${
              data?.itemId?.power
            } KW/h x ${data?.qty})`}
            statName={"Power"}
          />
          <StatElement1
            stat={`${data?.minedRevenue} BTC`}
            statName={"Mined Revenue"}
          />
          <StatElement1
            stat={data?.hostingFeePaid}
            statName={"Hosting Fee Paid"}
          />
          <StatElement1
            stat={data?.HostingFeeDue}
            statName={"Hosting Fee Due"}
          />
          <StatElement1
            stat={data?.purchasedOn.slice(0, 10)}
            statName={"Purchased On"}
          />
          <StatElement1
            stat={`${daysLeft} days (till ${data?.validity.slice(0, 10)})`}
            statName={"Validity Left"}
          />
        </div>
      </div>
    </div>
  );
}
