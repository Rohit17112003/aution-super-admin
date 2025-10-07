"use client";
import React, { useState } from "react";
import SearchBar from "@/components/molecules/Search";

const OutstandingPay = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterOptions = [...new Set(data.map((item) => item.status))];

  const filteredData = data.filter(
    (item) =>
      (item.vendorId.toLowerCase().includes(search.toLowerCase()) ||
        item.commissionType.toLowerCase().includes(search.toLowerCase())) &&
      (selectedFilter ? item.status === selectedFilter : true)
  );

  return (
    <section className="mt-6 mb-10 w-full px-4">
      <SearchBar
        placeholder="Search by Vendor ID or Commission Type..."
        value={search}
        onChange={setSearch}
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div className="overflow-x-auto">
        <table className="text-text md:w-full w-[900px] text-sm text-center font-nunito">
          <thead className="bg-[#F1F4F9] font-semibold text-[1rem]">
            <tr>
              <th className="px-4 py-4 rounded-l-xl">Vendor ID</th>
              <th className="px-4 py-4">Commission Type</th>
              <th className="px-4 py-4">Transaction Date</th>
              <th className="px-4 py-4">Commission Amount</th>
              <th className="px-4 py-4 rounded-r-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(
              ({ vendorId, commissionType, transactionDate, commissionAmount, status }, index) => (
                <tr
                  key={index}
                  className={`${index !== filteredData.length - 1 ? "border-b border-lightgray" : ""} text-[0.95rem] font-medium`}
                >
                  <td className="px-4 py-6 font-medium">{vendorId}</td>
                  <td className="px-4 py-6 font-medium capitalize">{commissionType}</td>
                  <td className="px-4 py-6 font-medium">{transactionDate}</td>
                  <td className="px-4 py-6 font-medium">{commissionAmount}</td>
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

export default OutstandingPay;

const data = [
  { vendorId: "HDYE7484", commissionType: "Vendor Subscription", transactionDate: "04 Sep 2019", commissionAmount: "500 INR", status: "Completed" },
  { vendorId: "HDYE7484", commissionType: "Vendor Subscription", transactionDate: "28 May 2019", commissionAmount: "500 INR", status: "Pending" },
  { vendorId: "HDYE7484", commissionType: "Vendor Subscription", transactionDate: "28 May 2019", commissionAmount:"500 INR", status: "Completed" },
  { vendorId: "HDYE7484", commissionType: "Vendor Subscription", transactionDate: "05 Feb 2019", commissionAmount: "500 INR", status: "Pending" },
];
