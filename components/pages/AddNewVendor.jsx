"use client";
import Button from "@/components/atoms/Button";
import BannerButton from "@/components/atoms/BannerButton";
import Input from "@/components/atoms/Input";
import ImageUploader from "@/components/molecules/ImageUploader";
import Textarea from "../atoms/TextArea";

const AddNewVendor = () => {
  return (
    <section className="space-y-7 pb-8">
      <BannerButton route="/" label="Add New Subscription Plan for Vendor" />

      <form className="grid gap-x-20 gap-y-7 md:grid-cols-2" action="">
        <div className="grid md:grid-cols-2 gap-6">
          <ImageUploader />
        </div>
        <Textarea placeholder="Description" style="md:col-span-2 w-full"/>

        <Input
          name="subscriptionName"
          placeholder="Subscription Name"
          type="text"
          icon="ri-file-text-line"
        />
        <Input
          name="price"
          placeholder="Price"
          type="number"
          icon="ri-currency-line"
        />
        <Input
          name="timePeriod"
          placeholder="Time Period"
          type="text"
          icon="ri-time-line"
        />
        <Input
          name="numberOfListings"
          placeholder="No. of Listing"
          type="number"
          icon="ri-list-ordered"
        />
        <Input
          name="benefits"
          placeholder="Benefits"
          type="text"
          icon="ri-gift-line"
        />

        <Button style="md:w-48 w-full md:col-span-2 mt-2" label="Add" />
      </form>
    </section>
  );
};

export default AddNewVendor;
