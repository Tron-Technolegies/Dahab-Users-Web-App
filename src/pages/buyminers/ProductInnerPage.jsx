import React, { useEffect } from "react";
import ProductDetails from "../../components/buyminers/productSingle/ProductDetails";
import DetailsAndSpecs from "../../components/buyminers/productSingle/DetailsAndSpecs";
import ROICalculator from "../../components/buyminers/productSingle/ROICalculator/ROICalculator";
import Loading from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import useGetSingleProduct from "../../hooks/products/useGetSingleProduct";

export default function ProductInnerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { loading: minerLoading, miner } = useGetSingleProduct({ id });
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col">
      <Link className="ms-auto" to={"/dashboard/buy"}>
        <span></span>Go Back
      </Link>
      {minerLoading ? (
        <Loading />
      ) : (
        <>
          <ProductDetails miner={miner} />
          <DetailsAndSpecs miner={miner} />
        </>
      )}

      <ROICalculator />
    </div>
  );
}
