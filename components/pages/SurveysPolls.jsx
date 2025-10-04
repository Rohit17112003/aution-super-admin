"use client";
import BannerButton from "@/components/atoms/BannerButton";

const SurveysPolls = () => {
  return (
    <>
      <BannerButton route="/" label="Surveys & Polls Bidders" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-light shadow px-4">
        <div className="overflow-x-auto">
          <table className="text-text md:w-full w-[1000px] text-[1rem] font-nunito mt-8">
            <thead className="bg-[#F1F4F9] text-start font-semibold ">
              <tr>
                <th className="px-12 py-4 text-start rounded-l-xl">Question</th>
                <th className="px-12 py-4 text-start">Response(Y/N)</th>
                <th className="px-12 py-4 text-start">Bidder ID</th>
                <th className="px-12 py-4 rounded-r-xl"></th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { Question, Response, BidderId },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`${
                      index !== data.length - 1
                        ? "border-lightgray border-b"
                        : ""
                    } text-center `}
                  >
                    <td className="px-12 py-6 font-semibold text-[0.9rem] text-start">{Question}</td>
                    <td className="px-12 py-6 font-semibold  text-start text-[0.95rem]">{Response}</td>
                    <td className="px-12 py-6 font-semibold text-[0.9rem] text-nowrap text-start">{BidderId}</td>
                    <td className="px-12 py-6">
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

export default SurveysPolls;

const data = [
  {
    Question: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    Response: "Yes",
    BidderId: "AU_23456",
  },
  {
    Question: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    Response: "Yes",
    BidderId: "AU_23456",
  },
  {
    Question: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    Response: "Yes",
    BidderId: "AU_23456",
  },
  {
    Question: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    Response: "Yes",
    BidderId: "AU_23456",
  },
];
