"use client";
import React, { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const Queries = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterOptions = [...new Set(data.map((item) => item.status))];

  const filteredData = data.filter(
    (item) =>
      (item.userId.toLowerCase().includes(search.toLowerCase()) ||
        item.query.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.mobile.toLowerCase().includes(search.toLowerCase())) &&
      (selectedFilter ? item.status === selectedFilter : true)
  );

  return (
    <>
      <BannerButton route="/" label="Queries" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-light shadow px-4">
        <SearchBar
          placeholder="Search by User ID, Query, Email or Mobile..."
          value={search}
          onChange={setSearch}
          filterOptions={filterOptions}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <div className="overflow-x-auto">
          <table className="text-text md:w-full w-[1000px] text-[1rem] font-nunito">
            <thead className="bg-[#F1F4F9] text-start font-semibold">
              <tr>
                <th className="px-4 py-4 rounded-l-xl">User ID</th>
                <th className="px-4 py-4 text-start">Query</th>
                <th className="px-6 py-4 text-start">Date</th>
                <th className="px-6 py-4 text-start">Email ID</th>
                <th className="px-6 py-4 text-nowrap">Mo. Number</th>
                <th className="px-6 py-4 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(({ userId, query, date, email, mobile, status }, index) => (
                <tr
                  key={index}
                  className={`${index !== filteredData.length - 1 ? "border-lightgray border-b" : ""} text-center`}
                >
                  <td className="px-4 py-6 font-medium">{userId}</td>
                  <td className="px-4 py-6 font-medium text-start text-[0.85rem]">{query}</td>
                  <td className="px-4 py-6 font-medium text-nowrap">{date}</td>
                  <td className="px-4 py-6 font-medium">{email}</td>
                  <td className="px-4 py-6 font-medium">{mobile}</td>
                  <td className="px-4 py-6">
                    <span
                      className={`inline-block w-full rounded px-2 py-1 text-sm font-medium capitalize ${
                        status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
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

export default Queries;

const data = [
  {
    userId: "AU_23456",
    query: "to ask questions of especially with a desire for authoritative information",
    date: "01 Aug 2023",
    email: "vedant@example.com",
    mobile: "9876543210",
    status: "Outstanding",
  },
  {
    userId: "AU_23456",
    query: "to ask questions of especially with a desire for authoritative information",
    date: "10 Sep 2023",
    email: "aarav@example.com",
    mobile: "9876501234",
    status: "Completed",
  },
  {
    userId: "AU_23456",
    query: "to ask questions of especially with a desire for authoritative information",
    date: "15 Sep 2023",
    email: "riya@example.com",
    mobile: "9812345678",
    status: "Outstanding",
  },
  {
    userId: "AU_23456",
    query: "to ask questions of especially with a desire for authoritative information",
    date: "20 Sep 2023",
    email: "dev@example.com",
    mobile: "9800012345",
    status: "Outstanding",
  },
];
