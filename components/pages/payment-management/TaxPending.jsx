"use client";
import SearchBar from "@/components/molecules/Search";

const TaxPanding = () => {
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
                <th className="px-4 py-4">Donation Date</th>
                <th className="px-4 py-4">Exemption Amount</th>
                <th className="px-4 py-4">Download 10BE</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { organizationName, auctionId, vendorId, donationDate, exemptionAmount },
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
                    <td className="px-4 py-6 font-medium">{donationDate}</td>
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

export default TaxPanding;

const data = [
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_7890",
    vendorId: "VEND_3456",
    donationDate: "01 Aug 2023",
    exemptionAmount: "5,00,000",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_7891",
    vendorId: "VEND_3456",
    donationDate: "10 Sep 2023",
    exemptionAmount: "5,00,000",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_7892",
    vendorId: "VEND_3456",
    donationDate: "15 Sep 2023",
    exemptionAmount: "5,00,000",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AUC_7893",
    vendorId: "VEND_3456",
    donationDate: "20 Sep 2023",
    exemptionAmount: "5,00,000",
  },
];
