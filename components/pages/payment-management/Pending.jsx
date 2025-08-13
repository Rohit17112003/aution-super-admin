"use client";
import SearchBar from "@/components/molecules/Search";

const Pending = () => {
  return (
    <>
      <section className="mt-6 mb-10 w-full">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text md:w-full w-[900px] text-sm text-center">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="px-4 py-4">Organization Name</th>
                <th className="px-4 py-4">Social Organization ID</th>
                <th className="px-4 py-4">Transaction Date</th>
                <th className="px-4 py-4">Paid Value</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ organizationName, socialOrganization, transactionDate, paidValue, status }, index) => (
                <tr
                  key={index}
                  className={`${index !== data.length - 1 ? "border-b border-lightgray" : ""}`}
                >
                  <td className="px-4 py-6 font-medium">{organizationName}</td>
                  <td className="px-4 py-6 font-medium capitalize">{socialOrganization}</td>
                  <td className="px-4 py-6 font-medium">{transactionDate}</td>
                  <td className="px-4 py-6 font-medium">₹{paidValue}</td>
                  <td className="px-4 py-6">
                    <span
                      className={`inline-block rounded px-2 py-1 text-sm font-medium capitalize cursor-pointer bg-yellow-100 text-darkyellow `}
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

export default Pending;

const data = [
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "01 Aug 2023",
    paidValue: "5,00,000 INR",
    status: "Pending",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "10 Sep 2023",
    paidValue: "5,00,000 INR",
    status: "Pending",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "15 Sep 2023",
    paidValue: "5,00,000 INR",
    status: "Pending",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "20 Sep 2023",
    paidValue: "5,00,000 INR",
    status: "Pending",
  },
];
