export default function ProductDetails({ miner }) {
  return (
    <div className="flex lg:flex-row flex-col gap-7 items-center">
      <div className="bg-[#011532] p-7 px-10 rounded-xl flex flex-col items-center gap-5">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <p className="flex gap-2 items-center">
              <img src={"/my-miners/i2.png"} className="w-2" />
              {miner?.hashRate} TH/s
            </p>
            <p className="flex gap-2 items-center">
              <img src={"/my-miners/i1.png"} className="w-2" />
              {miner?.power.toFixed(2)} KW/h
            </p>
          </div>
          <p>
            {miner?.stock > 0 ? (
              <span className="text-[#07EAD3]">In Stock</span>
            ) : (
              <span className="text-red-500">Out Of Stock</span>
            )}
          </p>
        </div>
        <img src={miner?.image} className="lg:w-[400px] w-full object-cover" />
      </div>
      <div>
        <h1 className="md:text-2xl text-xl text-[#1ECBAF] lg:text-left text-center font-semibold">
          {miner?.name}
        </h1>
        <p className="lg:text-left text-justify md:text-base text-sm font-semibold">
          {miner?.subtitle}
        </p>
      </div>
    </div>
  );
}
