import Image from "next/image";

const ProductApprovalCard = ({
  name,
  carName,
  img,
  auctionNo,
  date,
  price,
}) => {
  return (
    <div className="container-bg flex flex-col gap-6 p-3 lg:flex-row">
      <Image
        className="w-full rounded-lg lg:w-44"
        src={img}
        alt="car"
        width={200}
        height={300}
      />
      <div className="font-poppins space-y-2 p-1">
        <p className="text-tertiary text-[16px] font-semibold">{name}</p>
        <h4 className="text-lg font-semibold md:text-xl">{carName}</h4>
        <p className="text-secondary mb-3 text-sm">Auction no #{auctionNo}</p>
        <div className="flex gap-2">
          <p className="mb-2 flex w-fit items-center gap-1 rounded-sm bg-[#6A686629] p-1 text-[0.9rem] text-[#6A6866]">
            <i className="ri-timer-2-line ri-lg"></i>
            {date}
          </p>
        </div>
        <p className="text-tertiary pt-1 text-[16px] font-medium md:text-2xl">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductApprovalCard;
