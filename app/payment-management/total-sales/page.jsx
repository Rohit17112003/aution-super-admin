import MainLayout from "@/components/templates/MainLayout";
import TotalSales from "@/components/pages/payment-management/TotalSales";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <TotalSales />
    </MainLayout>
  );
};

export default page;
