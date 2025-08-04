import React, { useContext, useEffect } from "react";
import ProductDetails from "../../components/buyminers/productSingle/ProductDetails";
import DetailsAndSpecs from "../../components/buyminers/productSingle/DetailsAndSpecs";
import ROICalculator from "../../components/buyminers/productSingle/ROICalculator/ROICalculator";
import Loading from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import useGetSingleProduct from "../../hooks/products/useGetSingleProduct";
import { CalculatorContext } from "../../CalculatorContext";
import ProductDescription from "../../components/buyminers/productSingle/ProductDescription";

export default function ProductInnerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { loading: minerLoading, miner } = useGetSingleProduct({ id });
  const { setMinerPage } = useContext(CalculatorContext);
  useEffect(() => {
    setMinerPage(miner);
  }, [minerLoading, miner]);

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px]  py-10 flex flex-col">
      <Link
        className="ms-auto bg-[#011532] px-3 py-1 rounded-md mb-3"
        to={"/dashboard/buy"}
      >
        <span></span>Go Back
      </Link>
      {minerLoading ? (
        <Loading />
      ) : (
        <>
          <ProductDetails miner={miner} />
          <ROICalculator miner={miner} />
          <ProductDescription miner={miner} />
          <DetailsAndSpecs miner={miner} />
        </>
      )}
    </div>
  );
}
