"use client";
import BannerButton from "@/components/atoms/BannerButton";
import Input from "@/components/atoms/Input";
import ImageUploader from "@/components/molecules/ImageUploader";

const TaxExemptionDocument = () => {
  return (
    <section className="space-y-7 pb-8">
      <BannerButton route="/" label="Tax Exemption Document" />

      <form className="grid gap-x-20 gap-y-7 md:grid-cols-2" action="">
        <Input
          name="vendorId"
          placeholder="Vendor ID"
          type="text"
          icon="ri-id-card-line"
        />
        <Input
          name="vendorName"
          placeholder="Vendor Name"
          type="text"
          icon="ri-user-line"
        />
        <Input
          name="donationAmount"
          placeholder="Donation Amount"
          type="number"
          icon="ri-money-dollar-circle-line"
        />
        <Input
          name="incomeTaxExemptionValue"
          placeholder="Income Tax Exemption Value"
          type="number"
          icon="ri-file-chart-line"
        />
        <div>
          <Input
            name="socialPartner"
            placeholder="Social Partner Issuing Tax Exemption Form"
            type="text"
            icon="ri-hand-heart-line"
          />
          <h1 className="text-text mt-8 mb-4 text-lg font-bold tracking-wide">
            Income Tax Exemption Document
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <ImageUploader />
            <ImageUploader />
          </div>
        </div>

      </form>
    </section>
  );
};

export default TaxExemptionDocument;
