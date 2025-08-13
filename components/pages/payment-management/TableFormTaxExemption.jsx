"use client";

import { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import TaxIssued from "./TaxIssued";
import TaxPanding from "./TaxPending";
const TableFormTaxExemption = () => {
  const [activeTab, setActiveTab] = useState("TaxIssued");

  return (
    <>
      <BannerButton label={"Tax Exemption Form "} route={"/"} />
      <section className="bg-light my-6 rounded-xl shadow pt-6">
        <div className="flex overflow-x-auto pl-5">
          <div className="border-lightgray bg-extralightgray flex flex-wrap gap-4 rounded-full border p-1 sm:flex-nowrap">
            <button
              className={`cursor-pointer rounded-full  py-2 font-medium uppercase px-7 ${
                activeTab === "TaxIssued"
                  ? "bg-primary text-light"
                  : "bg-light text-dark"
              }`}
              onClick={() => setActiveTab("TaxIssued")}
            >
              issued
            </button>
            <button
              className={`cursor-pointer rounded-full py-2 font-medium uppercase px-7 ${
                activeTab === "TaxPanding"
                  ? "bg-primary text-light"
                  : "bg-light text-dark"
              }`}
              onClick={() => setActiveTab("TaxPanding")}
            >
              panding
            </button>
          </div>
        </div>

        <div className="mt-4">
          {activeTab === "TaxIssued" && <TaxIssued />}
          {activeTab === "TaxPanding" && <TaxPanding />}
        </div>
      </section>
    </>
  );
};

export default TableFormTaxExemption;
