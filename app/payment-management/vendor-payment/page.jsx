import MainLayout from "@/components/templates/MainLayout";
import VendorPayment from "@/components/pages/payment-management/VendorPayment";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <VendorPayment />
    </MainLayout>
  );
};

export default page;
