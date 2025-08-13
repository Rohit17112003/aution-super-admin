import Image from "next/image";

const ProductApprovalCard = ({name, carName, img, auctionNo, date,price }) => {
  return (
      <div className="container-bg flex flex-col gap-6 p-3 lg:flex-row">
        <Image
          className="w-full rounded-lg lg:w-44"
          src={img}
          alt="car"
          width={200}
          height={300}
        />
        <div>
          <p className="text-tertiary text-[16px] font-semibold">{name}</p>
          <h4 className="md:text-xl text-lg font-semibold">{carName}</h4>
          <p className="mb-2 text-secondary text-sm ">Auction no #{auctionNo}</p>
          <div className="flex gap-2">
          <p className="mb-2 flex w-fit items-center gap-1 rounded-sm bg-lightgray px-2 py-0.5 text-lightyellow">
            <i className="ri-timer-2-line ri-lg"></i>{date}
          </p>
          </div>
           <p className="text-tertiary text-[16px] md:text-2xl font-semibold pt-2">
           {price}
          </p>
        </div>
      </div>
  );
};

export default ProductApprovalCard;
