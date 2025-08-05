import React, { useEffect } from "react";
import CurrentBalance from "../../components/payout/withdraw/CurrentBalance";
// import EarningsGraph from "../../components/payout/withdraw/EarningsGraph";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import WithdrawForm from "../../components/payout/withdraw/WithdrawForm";

export default function WithdrawPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <Link to={"/dashboard/payouts"} className="flex gap-3 items-center">
        <IoIosArrowRoundBack /> Go Back
      </Link>
      <div className="flex lg:flex-row flex-col justify-center gap-10">
        <CurrentBalance />
        {/* <EarningsGraph /> */}
      </div>
      <WithdrawForm />
    </div>
  );
}
