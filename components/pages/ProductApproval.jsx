import ProductApprovalCard from "@/components/molecules/ProductApprovalCard";
import BannerButton from "../atoms/BannerButton";

const ProductApproval = () => {
  const design = (
    <>
      <section className="space-y-5">
      <BannerButton label={"Product Approval"} route={"/"}/>
        <div className="grid gap-6 lg:grid-cols-2">
          {auctions.map((auction, index) => (
            <ProductApprovalCard key={index} {...auction} />
          ))}
        </div>
      </section>
    </>
  );
  return design;
};

export default ProductApproval;

const auctions = [
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    date: "21-Aug-24",
    price: "₹ 18,590",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    date: "21-Aug-24",
    price: "₹ 18,590",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    date: "21-Aug-24",
    price: "₹ 18,590",
  },
];
