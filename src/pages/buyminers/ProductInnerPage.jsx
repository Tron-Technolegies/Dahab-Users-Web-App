import React, { useEffect } from "react";
import ProductDetails from "../../components/buyminers/productSingle/ProductDetails";
import DetailsAndSpecs from "../../components/buyminers/productSingle/DetailsAndSpecs";
import ROICalculator from "../../components/buyminers/productSingle/ROICalculator/ROICalculator";

export default function ProductInnerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10">
      <ProductDetails />
      <DetailsAndSpecs />
      <ROICalculator />
    </div>
  );
}
