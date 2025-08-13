import MainLayout from "@/components/templates/MainLayout";
import TableFormTaxExemption from "@/components/pages/payment-management/TableFormTaxExemption";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <TableFormTaxExemption />
    </MainLayout>
  );
};

export default page;
