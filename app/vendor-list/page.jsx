import MainLayout from "@/components/templates/MainLayout";
import VendorList from "@/components/pages/VendorList";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <VendorList />
    </MainLayout>
  );
}
