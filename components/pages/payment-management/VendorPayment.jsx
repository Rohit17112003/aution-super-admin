"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const VendorPayment = () => {
  return (
    <>
      <BannerButton route="/" label="Vendor Payment for Auction Sales" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-light shadow px-4">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text w-full min-w-max text-sm ">
            <thead className="bg-[#F1F4F9] text-center font-semibold">
              <tr>
                <th className="px-4 py-4 rounded-l-xl">Auction ID</th>
                <th className="px-4 py-4">Vendor ID</th>
                <th className="px-4 py-4">Vendor</th>
                <th className="px-4 py-4">Transaction Date</th>
                <th className="px-4 py-4">Paid Value</th>
                <th className="px-4 py-4">City</th>
                <th className="px-4 py-4 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { auctionId, bidderId, bidderName, transactionDate, amount, city, status },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`${
                      index !== data.length - 1 ? "border-lightgray border-b" : ""
                    } text-center`}
                  >
                    <td className="px-4 py-6 font-medium">{auctionId}</td>
                    <td className="px-4 py-6 font-medium">{bidderId}</td>
                    <td className="px-4 py-6 font-medium capitalize">{bidderName}</td>
                    <td className="px-4 py-6 font-medium">{transactionDate}</td>
                    <td className="px-4 py-6 font-medium">₹{amount}</td>
                    <td className="px-4 py-6 font-medium">{city}</td>
                    <td className="px-4 py-6">
                      <span
                        className={`inline-block w-[100%] rounded px-2 py-1 text-sm font-medium capitalize bg-teal-100 text-teal-600`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default VendorPayment;

const data = [
  {
    auctionId: "AUCTION001",
    bidderId: "BIDDER123",
    bidderName: "Vedant Sharma",
    transactionDate: "01 Aug 2023",
    amount: 1500,
    city: "Delhi",
    status: "completed",
  },
  {
    auctionId: "AUCTION002",
    bidderId: "BIDDER456",
    bidderName: "Aarav Singh",
    transactionDate: "10 Sep 2023",
    amount: 2500,
    city: "Mumbai",
    status: "completed",
  },
  {
    auctionId: "AUCTION003",
    bidderId: "BIDDER789",
    bidderName: "Riya Patel",
    transactionDate: "15 Sep 2023",
    amount: 1800,
    city: "Bangalore",
    status: "completed",
  },
  {
    auctionId: "AUCTION004",
    bidderId: "BIDDER321",
    bidderName: "Dev Kumar",
    transactionDate: "20 Sep 2023",
    amount: 2000,
    city: "Chennai",
    status: "completed",
  },
];
