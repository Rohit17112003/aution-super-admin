"use client";
import React, { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const AuctionHistory = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  // Unique status options for filter
  const filterOptions = [...new Set(data.map((item) => item.status))];

  // Filter data based on search and selected status
  const filteredData = data.filter(
    (item) =>
      (item.auctionId.toLowerCase().includes(search.toLowerCase()) ||
        item.bidderId.toLowerCase().includes(search.toLowerCase()) ||
        item.bidderName.toLowerCase().includes(search.toLowerCase())) &&
      (selectedFilter ? item.status === selectedFilter : true)
  );

  return (
    <>
      <BannerButton route="/" label="Auction History" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-white shadow px-4">
        <SearchBar
          placeholder="Search by Auction ID, Bidder ID or Name..."
          value={search}
          onChange={setSearch}
          filterOptions={filterOptions}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <div className="overflow-x-auto">
          <table className="text-text w-full text-sm text-center">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="px-4 py-4 rounded-l-xl">Auction ID</th>
                <th className="px-4 py-4">Bidder ID</th>
                <th className="px-4 py-4">Bidder Name</th>
                <th className="px-4 py-4">Transaction Date</th>
                <th className="px-4 py-4">Amount</th>
                <th className="px-4 py-4">City</th>
                <th className="px-4 py-4 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(
                ({ auctionId, bidderId, bidderName, transactionDate, amount, city, status }, index) => (
                  <tr
                    key={index}
                    className={`${index !== filteredData.length - 1 ? "border-lightgray border-b" : ""} text-center`}
                  >
                    <td className="px-4 py-6 font-medium">{auctionId}</td>
                    <td className="px-4 py-6 font-medium">{bidderId}</td>
                    <td className="px-4 py-6 font-medium capitalize">{bidderName}</td>
                    <td className="px-4 py-6 font-medium">{transactionDate}</td>
                    <td className="px-4 py-6 font-medium">₹{amount}</td>
                    <td className="px-4 py-6 font-medium">{city}</td>
                    <td className="px-4 py-6">
                      <span
                        className={`inline-block w-full rounded px-2 py-1 text-sm font-medium capitalize ${
                          status === "pending"
                            ? "bg-red-100 text-red-600"
                            : "bg-teal-100 text-teal-600"
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
    </>
  );
};

export default AuctionHistory;

const data = [
  {
    auctionId: "AUCTION001",
    bidderId: "BIDDER123",
    bidderName: "Vedant Sharma",
    transactionDate: "01 Aug 2023",
    amount: 1500,
    city: "Delhi",
    status: "Completed",
  },
  {
    auctionId: "AUCTION002",
    bidderId: "BIDDER456",
    bidderName: "Aarav Singh",
    transactionDate: "10 Sep 2023",
    amount: 2500,
    city: "Mumbai",
    status: "Pending",
  },
  {
    auctionId: "AUCTION003",
    bidderId: "BIDDER789",
    bidderName: "Riya Patel",
    transactionDate: "15 Sep 2023",
    amount: 1800,
    city: "Bangalore",
    status: "Completed",
  },
  {
    auctionId: "AUCTION004",
    bidderId: "BIDDER321",
    bidderName: "Dev Kumar",
    transactionDate: "20 Sep 2023",
    amount: 2000,
    city: "Chennai",
    status: "Completed",
  },
];
