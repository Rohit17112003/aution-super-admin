"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const Queries = () => {
  return (
    <>
      <BannerButton route="/" label="Queries" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-white shadow">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text md:w-full w-[1000px] text-sm">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-4 py-4">User ID</th>
                <th className="px-4 py-4">Query</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Email ID</th>
                <th className="px-4 py-4">Mo. Number</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { userId, query, date, email, mobile, status },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`${
                      index !== data.length - 1
                        ? "border-lightgray border-b"
                        : ""
                    } text-center`}
                  >
                    <td className="px-4 py-6 font-medium">{userId}</td>
                    <td className="px-4 py-6 font-medium">{query}</td>
                    <td className="px-4 py-6 font-medium">{date}</td>
                    <td className="px-4 py-6 font-medium">{email}</td>
                    <td className="px-4 py-6 font-medium">{mobile}</td>
                    <td className="px-4 py-6">
                      <span
                        className={`inline-block w-[100%] rounded px-2 py-1 text-sm font-medium capitalize ${
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

export default Queries;

const data = [
  {
    userId: "USER001",
    query: "Unable to place bid",
    date: "01 Aug 2023",
    email: "vedant@example.com",
    mobile: "9876543210",
    status: "completed",
  },
  {
    userId: "USER002",
    query: "Payment failed",
    date: "10 Sep 2023",
    email: "aarav@example.com",
    mobile: "9876501234",
    status: "pending",
  },
  {
    userId: "USER003",
    query: "Auction details not visible",
    date: "15 Sep 2023",
    email: "riya@example.com",
    mobile: "9812345678",
    status: "completed",
  },
  {
    userId: "USER004",
    query: "Need refund",
    date: "20 Sep 2023",
    email: "dev@example.com",
    mobile: "9800012345",
    status: "completed",
  },
];
