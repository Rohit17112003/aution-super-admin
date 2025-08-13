"use client";

import { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import TotalPayments from "./TotalPayments";
import OutstandingPay from "./OutstandingPay";

const MktgPartnerPayment = () => {
  const [activeTab, setActiveTab] = useState("totalPayments");

  return (
    <>
      <BannerButton label={"Marketing Partner Payment"} route={"/"} />
      <section className="bg-light my-6 rounded-xl shadow pt-6">
        <div className="flex overflow-x-auto pl-5">
          <div className="border-lightgray bg-extralightgray flex flex-wrap gap-4 rounded-full border p-1 sm:flex-nowrap">
            <button
              className={`cursor-pointer rounded-full px-3 py-2 font-medium uppercase md:px-7 ${
                activeTab === "totalPayments"
                  ? "bg-primary text-light"
                  : "bg-light text-dark"
              }`}
              onClick={() => setActiveTab("totalPayments")}
            >
              total payments
            </button>
            <button
              className={`cursor-pointer rounded-full px-3 py-2 font-medium uppercase md:px-7 ${
                activeTab === "outstandingPay"
                  ? "bg-primary text-light"
                  : "bg-light text-dark"
              }`}
              onClick={() => setActiveTab("outstandingPay")}
            >
              outstanding pay
            </button>
          </div>
        </div>

        <div className="mt-4">
          {activeTab === "totalPayments" && <TotalPayments />}
          {activeTab === "outstandingPay" && <OutstandingPay />}
        </div>
      </section>
    </>
  );
};

export default MktgPartnerPayment;
