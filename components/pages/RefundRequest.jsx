"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const RefundRequest = () => {
  return (
    <>
      <BannerButton route="/" label="Refund Request" />
      <section className="mt-6 w-full rounded-xl bg-white shadow mb-10">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text md:w-full w-[1000px] text-sm ">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-4 py-4">Auction ID</th>
                <th className="px-4 py-4">Vendor ID</th>
                <th className="px-4 py-4">Bidder ID</th>
                <th className="px-4 py-4">Transaction Date</th>
                <th className="px-4 py-4">Amount</th>
                <th className="px-4 py-4">Process Refund</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    auctionId,
                    bidderId,
                    customer,
                    transactionDate,
                    amount,
                    status,
                  },
                  index,
                ) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        index !== data.length - 1 ? "border-b border-lightgray" : ""
                      } text-center`}
                    >
                      <td className="px-4 py-6 font-medium">{auctionId}</td>
                      <td className="px-4 py-6 font-medium">{bidderId}</td>
                      <td className="px-4 py-6 font-medium capitalize">{customer}</td>
                      <td className="px-4 py-6 font-medium">{transactionDate}</td>
                      <td className="px-4 py-6 font-medium">₹{amount}</td>
                      <td className="px-4 py-6 font-medium">
                        {/* Example Process buttons */}
                        <button className="mr-2 rounded bg-lightyellow px-3 py-1 text-light hover:bg-yellow">
                          Refund Amount
                        </button>
                      </td>
                      <td className="px-4 py-6">
                        <span
                          className={`inline-block w-[100%] rounded px-2 py-1 text-sm font-medium capitalize ${
                            status === "pending"
                              ? "bg-red-100 text-red-600"
                              : "bg-teal-100 text-teal-600"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RefundRequest;

const data = [
  {
    auctionId: "HDYE7484",
    bidderId: "USR123",
    customer: "Vedant",
    transactionDate: "04 Sep 2019",
    amount: 500,
    status: "completed",
  },
  {
    auctionId: "HJKL7821",
    bidderId: "USR456",
    customer: "Aarav",
    transactionDate: "12 Oct 2020",
    amount: 1200,
    status: "completed",
  },
  {
    auctionId: "GHTY5689",
    bidderId: "USR789",
    customer: "Riya",
    transactionDate: "22 Jan 2021",
    amount: 300,
    status: "pending",
  },
  {
    auctionId: "POIU3456",
    bidderId: "USR012",
    customer: "Dev",
    transactionDate: "03 Mar 2023",
    amount: 900,
    status: "completed",
  },
];
