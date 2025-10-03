import MainLayout from "@/components/templates/MainLayout";
import TaxExemptionDocument from "@/components/pages/TaxExemptionDocument";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <TaxExemptionDocument />
    </MainLayout>
  );
}
