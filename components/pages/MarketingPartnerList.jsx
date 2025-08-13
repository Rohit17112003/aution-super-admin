"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const MarketingPartnerList = () => {
  return (
    <>
      <BannerButton route="/" label="Marketing Partner List" />
      <section className="mt-6 w-full rounded-xl bg-white shadow mb-10">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text w-full text-sm ">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-4 py-4">Marketing Partner ID</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Joining Date</th>
                <th className="px-4 py-4">Email ID</th>
                <th className="px-4 py-4">Mobile No.</th>
                <th className="px-4 py-4">City</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    partnerId,
                    name,
                    joiningDate,
                    email,
                    mobile,
                    city,
                  },
                  index,
                ) => (
                  <tr
                    key={index}
                    className={`${index !== data.length - 1 ? "border-b border-lightgray" : ""} text-center`}
                  >
                    <td className="px-4 py-6 font-medium">{partnerId}</td>
                    <td className="px-4 py-6 font-medium">{name}</td>
                    <td className="px-4 py-6 font-medium">{joiningDate}</td>
                    <td className="px-4 py-6 font-medium">{email}</td>
                    <td className="px-4 py-6 font-medium">{mobile}</td>
                    <td className="px-4 py-6 font-medium">{city}</td>
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

export default MarketingPartnerList;

const data = [
  {
    partnerId: "MP001",
    name: "Vedant Sharma",
    joiningDate: "04 Sep 2019",
    email: "vedant@example.com",
    mobile: "9876543210",
    city: "Delhi",
  },
  {
    partnerId: "MP002",
    name: "Aarav Singh",
    joiningDate: "12 Oct 2020",
    email: "aarav@example.com",
    mobile: "9123456780",
    city: "Mumbai",
  },
  {
    partnerId: "MP003",
    name: "Riya Patel",
    joiningDate: "22 Jan 2021",
    email: "riya@example.com",
    mobile: "9988776655",
    city: "Bangalore",
  },
  {
    partnerId: "MP004",
    name: "Dev Kumar",
    joiningDate: "03 Mar 2023",
    email: "dev@example.com",
    mobile: "9876501234",
    city: "Chennai",
  },
];
