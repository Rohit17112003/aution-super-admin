"use client";
import React, { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const VendorList = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  // Unique categories for filter dropdown
  const filterOptions = [...new Set(data.map((item) => item.category))];

  // Filter data based on search and selected category
  const filteredData = data.filter((item) => {
    return (
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
       item.auctionId.toLowerCase().includes(search.toLowerCase()) ||
       item.city.toLowerCase().includes(search.toLowerCase())) &&
      (selectedFilter ? item.category === selectedFilter : true)
    );
  });

  return (
    <>
      <BannerButton route="/" label="Vendor List" />
      <section className="mt-6 w-full rounded-xl bg-light shadow mb-10 px-4">
        <SearchBar
          placeholder="Search by name, auction ID or city..."
          value={search}
          onChange={setSearch}
          filterOptions={filterOptions}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <div className="overflow-x-auto">
          <table className="text-text w-full text-sm text-nowrap">
            <thead className="bg-[#F1F4F9] text-center font-semibold">
              <tr>
                <th className="px-4 py-4 rounded-l-xl">Auction ID</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Start Date</th>
                <th className="px-4 py-4">End Date</th>
                <th className="px-4 py-4">Email ID</th>
                <th className="px-4 py-4">Mobile No.</th>
                <th className="px-4 py-4">City</th>
                <th className="px-4 py-4 rounded-r-xl">Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(
                (
                  {
                    auctionId,
                    name,
                    startDate,
                    endDate,
                    email,
                    mobile,
                    city,
                    category,
                  },
                  index,
                ) => (
                  <tr
                    key={index}
                    className={`${index !== filteredData.length - 1 ? "border-b border-lightgray" : ""} text-center`}
                  >
                    <td className="px-4 py-6 font-medium">{auctionId}</td>
                    <td className="px-4 py-6 font-medium">{name}</td>
                    <td className="px-4 py-6 font-medium">{startDate}</td>
                    <td className="px-4 py-6 font-medium">{endDate}</td>
                    <td className="px-4 py-6 font-medium">{email}</td>
                    <td className="px-4 py-6 font-medium">{mobile}</td>
                    <td className="px-4 py-6 font-medium">{city}</td>
                    <td className="px-4 py-6 font-medium">{category}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default VendorList;

// Sample Data
const data = [
  {
    auctionId: "HDYE7484",
    name: "Vedant Sharma",
    startDate: "01 Jan 2023",
    endDate: "05 Jan 2023",
    email: "vedant@example.com",
    mobile: "9876543210",
    city: "Delhi",
    category: "Electronics",
  },
  {
    auctionId: "HJKL7821",
    name: "Aarav Singh",
    startDate: "15 Feb 2023",
    endDate: "20 Feb 2023",
    email: "aarav@example.com",
    mobile: "9123456780",
    city: "Mumbai",
    category: "Furniture",
  },
  {
    auctionId: "GHTY5689",
    name: "Riya Patel",
    startDate: "10 Mar 2023",
    endDate: "15 Mar 2023",
    email: "riya@example.com",
    mobile: "9988776655",
    city: "Bangalore",
    category: "Automobile",
  },
  {
    auctionId: "POIU3456",
    name: "Dev Kumar",
    startDate: "05 Apr 2023",
    endDate: "10 Apr 2023",
    email: "dev@example.com",
    mobile: "9876501234",
    city: "Chennai",
    category: "Real Estate",
  },
];
