"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const VendorDiscount = () => {
  return (
    <>
      <BannerButton route="/" label="Vendor Payment for Discount Sales" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-light shadow">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text w-[1000px] md:w-full text-[1rem] font-nunito">
            <thead className="bg-[#F1F4F9] text-center font-semibold">
              <tr>
                <th className="px-4 py-4">Discount Code</th>
                <th className=" py-4">Dis. Invoice Number</th>
                <th className="px-4 py-4">Vendor Name</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Product</th>
                <th className="px-4 py-4">Unit</th>
                <th className="px-4 py-4">Price</th>
                <th className="px-4 py-4">Discount Offered</th>
                <th className="px-4 py-4">GST</th>
                <th className="px-4 py-4">Total</th>
                <th className="px-4 py-4">Commission Dilse</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    discountCode,
                    invoiceNumber,
                    vendorName,
                    date,
                    product,
                    unit,
                    price,
                    discount,
                    gst,
                    total,
                    commission,
                  },
                  index
                ) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        index !== data.length - 1
                          ? "border-lightgray border-b"
                          : ""
                      } text-center text-[0.9rem] text-[#202224]`}
                    >
                      <td className=" py-6 font-semibold">{discountCode}</td>
                      <td className=" py-6 font-semibold">{invoiceNumber}</td>
                      <td className=" py-6 font-semibold capitalize">
                        {vendorName}
                      </td>
                      <td className=" py-6 font-semibold text-nowrap">{date}</td>
                      <td className=" py-6 font-semibold">{product}</td>
                      <td className=" py-6 font-semibold">{unit}</td>
                      <td className=" py-6 font-semibold">{price}</td>
                      <td className=" py-6 font-semibold">{discount}</td>
                      <td className=" py-6 font-semibold">{gst}</td>
                      <td className=" py-6 font-semibold">{total}</td>
                      <td className=" py-6 font-semibold">{commission}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default VendorDiscount;

const data = [
  {
    discountCode: "AU_23456",
    invoiceNumber: "AU_23456",
    vendorName: "Vedant",
    date: "04 Sep 2019",
    product: "TV",
    unit: 3,
    price: "5,000 INR",
    discount: "5,00 INR",
    gst: "5,00 INR",
    total: "5,000 INR",
    commission: "5,000 INR",
  },
  {
    discountCode: "AU_23456",
    invoiceNumber: "AU_23456",
    vendorName: "Vedant",
    date: "28 May 2019",
    product: "TV",
    unit: 2,
    price: "5,000 INR",
    discount: "5,00 INR",
    gst: "5,00 INR",
    total: "5,000 INR",
    commission: "5,000 INR",
  },
  {
    discountCode: "AU_23456",
    invoiceNumber: "AU_23456",
    vendorName: "Vedant",
    date: "28 May 2019",
    product: "TV",
    unit: 6,
    price: "5,000 INR",
    discount: "5,00 INR",
    gst: "5,00 INR",
    total:"5,000 INR",
    commission: "5,000 INR",
  },
  {
    discountCode: "AU_23456",
    invoiceNumber: "AU_23456",
    vendorName: "Vedant",
    date: "05 Feb 2019",
    product: "TV",
    unit: 2,
    price: "5,000 INR",
    discount: "5,00 INR",
    gst: "5,00 INR",
    total: "5,000 INR",
    commission: "5,000 INR",
  },
];
