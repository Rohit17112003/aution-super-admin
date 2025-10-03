"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const Queries = () => {
  return (
    <>
      <BannerButton route="/" label="Queries" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-light shadow">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text md:w-full w-[1000px] text-[1rem] font-nunito">
            <thead className="bg-[#F1F4F9] text-start font-semibold">
              <tr>
                <th className="px-4 py-4">User ID</th>
                <th className="px-4 py-4 text-start">Query</th>
                <th className="px-6 py-4 text-start">Date</th>
                <th className="px-6 py-4 text-start">Email ID</th>
                <th className="px-6 py-4">Mo. Number</th>
                <th className="px-6 py-4">Status</th>
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
                    <td className="px-4 py-6 font-medium text-start text-[0.85rem]">{query}</td>
                    <td className="px-4 py-6 font-medium text-nowrap">{date}</td>
                    <td className="px-4 py-6 font-medium">{email}</td>
                    <td className="px-4 py-6 font-medium">{mobile}</td>
                    <td className="px-4 py-6">
                      <span
                        className={`inline-block w-[100%] rounded px-2 py-1 text-sm font-medium capitalize ${
                          status === "completed"
                            ? "bg-[#EF3826]/15 text-[#EF3826]"
                            : "bg-[#EF3826]/15 text-[#EF3826]"
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
