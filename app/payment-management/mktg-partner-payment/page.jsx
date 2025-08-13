import MainLayout from "@/components/templates/MainLayout";
import MktgPartnerPayment from "@/components/pages/payment-management/MktgPartnerPayment";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <MktgPartnerPayment />
    </MainLayout>
  );
};

export default page;
