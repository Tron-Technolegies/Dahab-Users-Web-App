import React from "react";
import useGetCoinData from "../../../hooks/coins/useGetCoinData";
import LiveCard from "./LiveCard";
import Loading from "../../Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LivePrice() {
  //   const { loading, data } = useGetCoinData();
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h5 className="text-2xl">Live Price</h5>
      <div className="">
        <Slider {...settings} className="py-10 my-10">
          {data.length > 0 &&
            data.map((item) => <LiveCard key={item.id} data={item} />)}
        </Slider>
      </div>
    </div>
  );
}
