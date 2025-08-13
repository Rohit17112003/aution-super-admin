"use client";
import SearchBar from "@/components/molecules/Search";

const TaxIssued = () => {
  return (
    <>
      <section className="mt-6 mb-10 w-full">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text min-w-[900px] w-full text-sm text-center">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="px-4 py-4">Organization Name</th>
                <th className="px-4 py-4">Auction ID</th>
                <th className="px-4 py-4">Vendor ID</th>
                <th className="px-4 py-4">Issued Date</th>
                <th className="px-4 py-4">Exemption Amount</th>
                <th className="px-4 py-4">Download 10BE</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    organizationName,
                    auctionId,
                    vendorId,
                    issuedDate,
                    exemptionAmount,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`${
                      index !== data.length - 1 ? "border-b border-lightgray" : ""
                    }`}
                  >
                    <td className="px-4 py-6 font-medium">{organizationName}</td>
                    <td className="px-4 py-6 font-medium">{auctionId}</td>
                    <td className="px-4 py-6 font-medium">{vendorId}</td>
                    <td className="px-4 py-6 font-medium">{issuedDate}</td>
                    <td className="px-4 py-6 font-medium">₹{exemptionAmount}</td>
                    <td className="px-4 py-6">
                      <span
                        className="inline-flex items-center gap-1 rounded px-3 py-1 bg-primary text-light text-sm font-medium hover:bg-primary/90 transition cursor-pointer"
                      >
                        <i className="ri-download-2-line text-lg font-light"></i> PDF
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

export default TaxIssued;

const data = [
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_3456",
    vendorId: "VEND_1122",
    issuedDate: "01 Aug 2023",
    exemptionAmount: "5,00,000",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_9876",
    vendorId: "VEND_3344",
    issuedDate: "10 Sep 2023",
    exemptionAmount: "5,00,000",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_2468",
    vendorId: "VEND_5566",
    issuedDate: "15 Sep 2023",
    exemptionAmount: "5,00,000",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_1357",
    vendorId: "VEND_7788",
    issuedDate: "20 Sep 2023",
    exemptionAmount: "5,00,000",
  },
];
