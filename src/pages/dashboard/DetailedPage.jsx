import React, { useEffect } from "react";
import TopSection from "../../components/dashboard/detailed/TopSection/TopSection";
import DetailedTable from "../../components/dashboard/detailed/detailedTable/DetailedTable";

export default function DetailedPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 ">
      <TopSection />
      <DetailedTable />
    </div>
  );
}
