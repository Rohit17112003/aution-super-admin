"use client";

import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const TotalSales = () => {

  return (
    <>
      <BannerButton route="/" label="Total Sales" />

      <section className="mt-6 mb-10 w-full rounded-xl bg-light shadow px-1">
        <SearchBar placeholder="Search here..." />
        {/* Table */}
        <div className="overflow-auto">
          <table className="w-[1000px] text-sm  text-left text-text">
            <thead className="bg-[#F1F4F9] ">
              <tr className="text-[1rem]  tracking-wide text-text">
                <th className=" px-1 py-3 font-semibold rounded-tl-xl">Bidder ID</th>
                <th className=" px-1 py-3 font-semibold">Auction ID</th>

                <th colSpan={3} className=" px-1 py-3 font-semibold text-center">
                  Vendor Price INR
                </th>
                <th colSpan={3} className=" px-1 py-3 font-semibold text-center">
                  Start Price INR
                </th>
                <th colSpan={3} className=" px-1 py-3 font-semibold text-center">
                  Final Price INR
                </th>

                <th className=" px-1 py-3 font-semibold">Transaction Date</th>
                <th className=" px-1 py-3 font-semibold rounded-tr-xl">Status</th>
              </tr>

              {/* Sub-headers */}
              <tr className="bg-gray-100  text-center text-sm font-light tracking-wide text-text">
                <th className="rounded-bl-xl"></th>
                <th></th>

                <th className="px-1 text-nowrap font-medium text-[0.9rem] pb-2">Item Price</th>
                <th className="px-1 font-medium text-[0.9rem] pb-2">GST</th>
                <th className="px-1 font-medium text-[0.9rem] pb-2">Total</th>

                <th className="px-1 font-medium text-[0.9rem] pb-2">Platform</th>
                <th className="px-1 font-medium text-[0.9rem] pb-2">GST</th>
                <th className="px-1 font-medium text-[0.9rem] pb-2">Total</th>

                <th className="px-1 font-medium text-[0.9rem] pb-2">Transaction</th>
                <th className="px-1 font-medium text-[0.9rem] pb-2">GST</th>
                <th className="px-1 font-medium text-[0.9rem] pb-2">Total</th>

                <th></th>
                <th className="rounded-br-xl"></th>
              </tr>
            </thead>

            <tbody>
              {data.map(
                (
                  {
                    bidderId,
                    auctionId,
                    vendorPrice,
                    startPrice,
                    finalPrice,
                    transactionDate,
                    status,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`border-b border-lightgray text-center`}
                  >
                    <td className="px-1 py-4 font-medium">{bidderId}</td>
                    <td className="px-1 py-4 font-medium">{auctionId}</td>

                    <td className="px-1 py-8">{vendorPrice.itemPrice}</td>
                    <td className="px-1 py-8">{vendorPrice.gst}</td>
                    <td className="px-1 py-8">{vendorPrice.total}</td>

                    <td className="px-1 py-8">{startPrice.platform}</td>
                    <td className="px-1 py-8">{startPrice.gst}</td>
                    <td className="px-1 py-8">{startPrice.total}</td>

                    <td className="px-1 py-8">{finalPrice.transaction}</td>
                    <td className="px-1 py-8">{finalPrice.gst}</td>
                    <td className="px-1 py-8">{finalPrice.total}</td>

                    <td className="px-1 py-4">{transactionDate}</td>

                    <td className="px-1 py-4">
                      <span
                        className={` rounded py-1 text-sm font-medium capitalize px-2  bg-green-100`}
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

export default TotalSales;

const data = [
  {
    bidderId: "HDYE7484",
    auctionId: "HDYE7484",
    vendorPrice: { itemPrice: 400, gst: 400, total: 400 },
    startPrice: { platform: 400, gst: 400, total: 400 },
    finalPrice: { transaction: 400, gst: 400, total: 400 },
    transactionDate: "04 May 2019",
    status: "completed",
  },
  {
    bidderId: "HDYE7484",
    auctionId: "HDYE7484",
    vendorPrice: { itemPrice: 400, gst: 400, total: 400 },
    startPrice: { platform: 400, gst: 400, total: 400 },
    finalPrice: { transaction: 400, gst: 400, total: 400 },
    transactionDate: "28 May 2019",
    status: "completed",
  },
  {
    bidderId: "HDYE7484",
    auctionId: "HDYE7484",
    vendorPrice: { itemPrice: 400, gst: 400, total: 400 },
    startPrice: { platform: 400, gst: 400, total: 400 },
    finalPrice: { transaction: 400, gst: 400, total: 400 },
    transactionDate: "28 May 2019",
    status: "pending",
  },
  {
    bidderId: "HDYE7484",
    auctionId: "HDYE7484",
    vendorPrice: { itemPrice: 400, gst: 400, total: 400 },
    startPrice: { platform: 400, gst: 400, total: 400 },
    finalPrice: { transaction: 400, gst: 400, total: 400 },
    transactionDate: "05 Feb 2019",
    status: "completed",
  },
];
