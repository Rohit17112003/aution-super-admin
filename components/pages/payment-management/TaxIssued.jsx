"use client";
import SearchBar from "@/components/molecules/Search";

const TaxIssued = () => {
  return (
    <>
      <section className="mt-6 mb-10 w-full">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text min-w-[900px] w-full text-[1rem] font-nunito text-center">
            <thead className="bg-[#F1F4F9] font-semibold">
              <tr>
                <th className="px-3 py-4">Organization Name</th>
                <th className="px-3 py-4">Auction ID</th>
                <th className="px-3 py-4">Vendor ID</th>
                <th className="px-3 py-4">Issued Date</th>
                <th className="px-3 py-4">Donation Amount</th>
                <th className="px-3 py-4">Exemption Amount</th>
                <th className="px-3 py-4">Download 10BE</th>
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
                    donationAmount,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`${
                      index !== data.length - 1 ? "border-b border-lightgray" : ""
                    } text-[#202224] text-[0.9rem]`}
                  >
                    <td className="px-4 py-6 font-semibold">{organizationName}</td>
                    <td className="px-4 py-6 font-semibold">{auctionId}</td>
                    <td className="px-4 py-6 font-semibold">{vendorId}</td>
                    <td className="px-4 py-6 font-semibold">{issuedDate}</td>
                    <td className="px-4 py-6 font-semibold">{donationAmount}</td>
                    <td className="px-4 py-6 font-semibold">{exemptionAmount}</td>
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
    auctionId: "AU_23456",
    vendorId: "AU_23456",
    issuedDate: "04 Sep 2019",
    exemptionAmount: "5,00,000 INR",
    donationAmount:"5,00,000 INR",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AU_23456",
    vendorId: "AU_23456",
    issuedDate: "28 May 2019",
    exemptionAmount: "5,00,000 INR",
    donationAmount:"5,00,000 INR",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AU_23456",
    vendorId: "AU_23456",
    issuedDate: "28 May 2019",
    exemptionAmount: "5,00,000 INR",
    donationAmount:"5,00,000 INR",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    auctionId: "AU_23456",
    vendorId: "AU_23456",
    issuedDate: "05 Feb 2019",
    exemptionAmount: "5,00,000 INR",
    donationAmount:"5,00,000 INR",
  },
];
