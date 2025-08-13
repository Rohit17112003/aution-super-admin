import MainLayout from "@/components/templates/MainLayout";
import VendorDiscount from "@/components/pages/payment-management/VendorDiscount";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <VendorDiscount />
    </MainLayout>
  );
};

export default page;
