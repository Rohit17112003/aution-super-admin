"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const BidderList = () => {
  return (
    <>
      <BannerButton route="/" label="Bidder List" />
      <section className="mt-6 w-full rounded-xl bg-light shadow mb-10 px-4">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text w-full text-sm text-nowrap">
            <thead className="bg-[#F1F4F9] text-center font-semibold">
              <tr>
                <th className="px-4 py-4 rounded-l-xl">Bidder ID</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Joining Date</th>
                <th className="px-4 py-4">Email ID</th>
                <th className="px-4 py-4">Mobile No.</th>
                <th className="px-4 py-4 rounded-r-xl">City</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    bidderId,
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
                    <td className="px-4 py-6 font-medium">{bidderId}</td>
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

export default BidderList;

const data = [
  {
    bidderId: "USR123",
    name: "Vedant Sharma",
    joiningDate: "04 Sep 2019",
    email: "vedant@example.com",
    mobile: "9876543210",
    city: "Delhi",
  },
  {
    bidderId: "USR456",
    name: "Aarav Singh",
    joiningDate: "12 Oct 2020",
    email: "aarav@example.com",
    mobile: "9123456780",
    city: "Mumbai",
  },
  {
    bidderId: "USR789",
    name: "Riya Patel",
    joiningDate: "22 Jan 2021",
    email: "riya@example.com",
    mobile: "9988776655",
    city: "Bangalore",
  },
  {
    bidderId: "USR012",
    name: "Dev Kumar",
    joiningDate: "03 Mar 2023",
    email: "dev@example.com",
    mobile: "9876501234",
    city: "Chennai",
  },
];
