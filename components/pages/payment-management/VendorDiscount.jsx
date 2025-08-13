"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const VendorDiscount = () => {
  return (
    <>
      <BannerButton route="/" label="Vendor Discount Sales" />
      <section className="mt-6 mb-10 w-full rounded-xl bg-white shadow">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text w-[1000px] md:w-full text-sm ">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-4 py-4">Discount Code</th>
                <th className="px-4 py-4">Dis. Invoice Number</th>
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
                      } text-center`}
                    >
                      <td className="px-4 py-6 font-medium">{discountCode}</td>
                      <td className="px-4 py-6 font-medium">{invoiceNumber}</td>
                      <td className="px-4 py-6 font-medium capitalize">
                        {vendorName}
                      </td>
                      <td className="px-4 py-6 font-medium">{date}</td>
                      <td className="px-4 py-6 font-medium">{product}</td>
                      <td className="px-4 py-6 font-medium">{unit}</td>
                      <td className="px-4 py-6 font-medium">₹{price}</td>
                      <td className="px-4 py-6 font-medium">₹{discount}</td>
                      <td className="px-4 py-6 font-medium">₹{gst}</td>
                      <td className="px-4 py-6 font-medium">₹{total}</td>
                      <td className="px-4 py-6 font-medium">₹{commission}</td>
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
    discountCode: "DISC001",
    invoiceNumber: "INV12345",
    vendorName: "Vedant Sharma",
    date: "01 Aug 2023",
    product: "Laptop",
    unit: 2,
    price: 50000,
    discount: 5000,
    gst: 9000,
    total: 54000,
    commission: 2000,
  },
  {
    discountCode: "DISC002",
    invoiceNumber: "INV45678",
    vendorName: "Aarav Singh",
    date: "10 Sep 2023",
    product: "Mobile Phone",
    unit: 1,
    price: 30000,
    discount: 3000,
    gst: 5400,
    total: 32400,
    commission: 1500,
  },
  {
    discountCode: "DISC003",
    invoiceNumber: "INV78912",
    vendorName: "Riya Patel",
    date: "15 Sep 2023",
    product: "Headphones",
    unit: 3,
    price: 9000,
    discount: 900,
    gst: 1620,
    total: 9720,
    commission: 500,
  },
  {
    discountCode: "DISC004",
    invoiceNumber: "INV32165",
    vendorName: "Dev Kumar",
    date: "20 Sep 2023",
    product: "Smartwatch",
    unit: 2,
    price: 20000,
    discount: 2000,
    gst: 3600,
    total: 21600,
    commission: 1000,
  },
];
