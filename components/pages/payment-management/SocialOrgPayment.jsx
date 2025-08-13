"use client";

import { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import Issued from "./Issued";
import Pending from "./Pending";

const SocialOrgPayment = () => {
  const [activeTab, setActiveTab] = useState("issued");

  return (
    <>
      <BannerButton label={"Social Organizations Payment To Be Made"} route={"/"} />
      <section className="bg-light my-6 rounded-xl shadow pt-6">
        <div className="flex overflow-x-auto pl-5">
          <div className="border-lightgray bg-extralightgray flex flex-wrap gap-4 rounded-full border p-1 sm:flex-nowrap">
            <button
              className={`cursor-pointer rounded-full  py-2 font-medium uppercase px-7 ${
                activeTab === "issued"
                  ? "bg-primary text-light"
                  : "bg-light text-dark"
              }`}
              onClick={() => setActiveTab("issued")}
            >
             issued
            </button>
            <button
              className={`cursor-pointer rounded-full  py-2 font-medium uppercase px-7 ${
                activeTab === "pending"
                  ? "bg-primary text-light"
                  : "bg-light text-dark"
              }`}
              onClick={() => setActiveTab("pending")}
            >
             pending
            </button>
          </div>
        </div>

        <div className="mt-4">
          {activeTab === "issued" && <Issued />}
          {activeTab === "pending" && <Pending />}
        </div>
      </section>
    </>
  );
};

export default SocialOrgPayment;
