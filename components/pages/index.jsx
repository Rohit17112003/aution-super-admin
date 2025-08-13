"use client"
import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";

const HomePage = () => {
  const { stats } = data;

  return (
    <div className="space-y-5 mb-10">
      <section className="bg-light grid gap-5 rounded-lg p-5 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatContainer key={index} index={index} {...stat} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
