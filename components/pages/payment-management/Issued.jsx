"use client";
import React, { useState } from "react";
import SearchBar from "@/components/molecules/Search";

const Issued = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterOptions = [...new Set(data.map((item) => item.status))];

  const filteredData = data.filter(
    (item) =>
      (item.organizationName.toLowerCase().includes(search.toLowerCase()) ||
        item.socialOrganization.toLowerCase().includes(search.toLowerCase())) &&
      (selectedFilter ? item.status === selectedFilter : true)
  );

  return (
    <section className="mt-6 mb-10 w-full px-4">
      <SearchBar
        placeholder="Search by Organization or ID..."
        value={search}
        onChange={setSearch}
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="overflow-x-auto">
        <table className="text-text md:w-full w-[900px] text-sm text-center font-nunito text-[1rem]">
          <thead className="bg-[#F1F4F9] font-semibold">
            <tr>
              <th className="px-4 py-4 rounded-l-xl">Organization Name</th>
              <th className="px-4 py-4">Social Organization ID</th>
              <th className="px-4 py-4">Transaction Date</th>
              <th className="px-4 py-4">Paid Value</th>
              <th className="px-4 py-4 rounded-r-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(
              ({ organizationName, socialOrganization, transactionDate, paidValue, status }, index) => (
                <tr
                  key={index}
                  className={`${index !== filteredData.length - 1 ? "border-b border-lightgray" : ""}`}
                >
                  <td className="px-4 py-6 font-medium">{organizationName}</td>
                  <td className="px-4 py-6 font-medium capitalize">{socialOrganization}</td>
                  <td className="px-4 py-6 font-medium">{transactionDate}</td>
                  <td className="px-4 py-6 font-medium">{paidValue}</td>
                  <td className="px-4 py-6">
                    <span
                      className={`inline-block rounded px-2 py-1 text-sm font-medium capitalize cursor-pointer ${
                        status === "completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-[#E7B010]/15 text-[#E7B010]"
                      }`}
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
  );
};

export default Issued;

const data = [
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "04 Sep 2019",
    paidValue: "5,00,000 INR",
    status: "Completed",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "28 May 2019",
    paidValue: "5,00,000 INR",
    status: "Completed",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "28 May 2019",
    paidValue: "5,00,000 INR",
    status: "Completed",
  },
  {
    organizationName: "Janiv Jagruti Foundation",
    socialOrganization: "ORG_3456",
    transactionDate: "05 Feb 2019",
    paidValue: "5,00,000 INR",
    status: "Completed",
  },
];
