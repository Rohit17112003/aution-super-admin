"use client";
import SearchBar from "@/components/molecules/Search";

const TotalPayments = () => {
  return (
    <>
      <section className="mt-6 mb-10 w-full">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text md:w-full w-[900px] text-sm text-center">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="px-4 py-4">Vendor ID</th>
                <th className="px-4 py-4">Commission Type</th>
                <th className="px-4 py-4">Transaction Date</th>
                <th className="px-4 py-4">Commission Amount</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ vendorId, commissionType, transactionDate, commissionAmount, status }, index) => (
                <tr
                  key={index}
                  className={`${index !== data.length - 1 ? "border-b border-lightgray" : ""}`}
                >
                  <td className="px-4 py-6 font-medium">{vendorId}</td>
                  <td className="px-4 py-6 font-medium capitalize">{commissionType}</td>
                  <td className="px-4 py-6 font-medium">{transactionDate}</td>
                  <td className="px-4 py-6 font-medium">₹{commissionAmount}</td>
                  <td className="px-4 py-6">
                    <span
                      className={`inline-block rounded px-2 py-1 text-sm font-medium capitalize cursor-pointer bg-lightgray text-pink `}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TotalPayments;

const data = [
  {
    vendorId: "V001",
    commissionType: "Discount",
    transactionDate: "01 Aug 2023",
    commissionAmount: 2000,
    status: "completed",
  },
  {
    vendorId: "V002",
    commissionType: "Referral",
    transactionDate: "10 Sep 2023",
    commissionAmount: 1500,
    status: "completed",
  },
  {
    vendorId: "V003",
    commissionType: "Performance",
    transactionDate: "15 Sep 2023",
    commissionAmount: 500,
    status: "completed",
  },
  {
    vendorId: "V004",
    commissionType: "Discount",
    transactionDate: "20 Sep 2023",
    commissionAmount: 1000,
    status: "completed",
  },
];
