"use client";
import React, { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const SocialOrganizationList = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(""); // optional city filter

  // Unique cities for filter dropdown
  const filterOptions = [...new Set(data.map((item) => item.city))];

  // Filter data based on search input and selected city
  const filteredData = data.filter((item) => {
    return (
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
       item.email.toLowerCase().includes(search.toLowerCase()) ||
       item.city.toLowerCase().includes(search.toLowerCase())) &&
      (selectedFilter ? item.city === selectedFilter : true)
    );
  });

  return (
    <>
      <BannerButton route="/" label="Marketing Partner List" />
      <section className="mt-6 w-full rounded-xl bg-light shadow mb-10 px-4">
        <SearchBar
          placeholder="Search by name, email or city..."
          value={search}
          onChange={setSearch}
          filterOptions={filterOptions} // optional city filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <div className="overflow-x-auto">
          <table className="text-text w-full text-sm">
            <thead className="bg-[#F1F4F9] text-center font-semibold">
              <tr>
                <th className="px-4 py-4 rounded-l-xl">Organization Name</th>
                <th className="px-4 py-4">Joining Date</th>
                <th className="px-4 py-4">Email ID</th>
                <th className="px-4 py-4">Mobile No.</th>
                <th className="px-4 py-4 rounded-r-xl">City</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(({ name, joiningDate, email, mobile, city }, index) => (
                <tr
                  key={index}
                  className={`${index !== filteredData.length - 1 ? "border-b border-lightgray" : ""} text-center`}
                >
                  <td className="px-4 py-6 font-medium">{name}</td>
                  <td className="px-4 py-6 font-medium">{joiningDate}</td>
                  <td className="px-4 py-6 font-medium">{email}</td>
                  <td className="px-4 py-6 font-medium">{mobile}</td>
                  <td className="px-4 py-6 font-medium">{city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SocialOrganizationList;

const data = [
  {
    name: "Vedant Sharma",
    joiningDate: "04 Sep 2019",
    email: "vedant@example.com",
    mobile: "9876543210",
    city: "Delhi",
  },
  {
    name: "Aarav Singh",
    joiningDate: "12 Oct 2020",
    email: "aarav@example.com",
    mobile: "9123456780",
    city: "Mumbai",
  },
  {
    name: "Riya Patel",
    joiningDate: "22 Jan 2021",
    email: "riya@example.com",
    mobile: "9988776655",
    city: "Bangalore",
  },
  {
    name: "Dev Kumar",
    joiningDate: "03 Mar 2023",
    email: "dev@example.com",
    mobile: "9876501234",
    city: "Chennai",
  },
];
