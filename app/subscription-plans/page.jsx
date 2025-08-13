import SubscriptionPlans from "@/components/pages/SubscriptionPlans";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <SubscriptionPlans />
    </MainLayout>
  );
};

export default page;
