import MainLayout from "@/components/templates/MainLayout";
import SocialOrgPayment from "@/components/pages/payment-management/SocialOrgPayment";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <SocialOrgPayment />
    </MainLayout>
  );
};

export default page;
